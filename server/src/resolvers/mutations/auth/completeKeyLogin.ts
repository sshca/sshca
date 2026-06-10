import { AuthenticationError } from "apollo-server-express";
import { Response } from "express";
import jwt from "jsonwebtoken";
import sshpk from "sshpk";
import { authCookieOptions } from "../../../cookies";
import prisma from "../../../prisma";

export const completeKeyLogin = async (
  _: any,
  {
    id,
    key,
    signature,
  }: {
    id: string;
    key: string;
    signature: string;
  },
  { res }: { res: Response }
) => {
  const challenge = await prisma.keyLoginChallenge.findUnique({
    where: { id },
  });
  if (!challenge || challenge.expiresAt.getTime() < Date.now()) {
    if (challenge) {
      await prisma.keyLoginChallenge.delete({ where: { id } });
    }
    throw new AuthenticationError("Invalid key challenge");
  }

  let userKey: sshpk.Key;
  try {
    userKey = sshpk.parseKey(key, "ssh");
  } catch (e) {
    throw new AuthenticationError("Invalid key");
  }
  const fingerprint = userKey.fingerprint("sha256").hash;
  if (!Buffer.from(fingerprint).equals(Buffer.from(challenge.fingerprint))) {
    throw new AuthenticationError("Invalid key challenge");
  }

  let verified = false;
  try {
    const parsedSignature = sshpk.parseSignature(
      signature,
      userKey.type as any,
      "ssh"
    );
    const verifier = userKey.createVerify(
      parsedSignature.hashAlgorithm || undefined
    );
    verifier.write(challenge.nonce);
    verifier.end();
    verified = verifier.verify(parsedSignature);
  } catch (e) {
    verified = false;
  }
  if (!verified) {
    throw new AuthenticationError("Invalid key challenge");
  }

  const enrolledKey = await prisma.userFingerprint.findUnique({
    where: { fingerprint },
    select: { userId: true },
  });
  if (!enrolledKey) {
    throw new AuthenticationError("Invalid key");
  }

  await prisma.keyLoginChallenge.delete({ where: { id } });
  res.cookie(
    "token",
    jwt.sign(
      { id: enrolledKey.userId, fullLogin: false },
      process.env.JWT_PRIVATE,
      {
        expiresIn: "2 days",
        algorithm: "RS256",
      }
    ),
    authCookieOptions()
  );
  return enrolledKey.userId;
};
