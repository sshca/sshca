import { randomBytes } from "crypto";
import { AuthenticationError } from "apollo-server-express";
import sshpk from "sshpk";
import prisma from "../../../prisma";

export const beginKeyLogin = async (_: any, { key }: { key: string }) => {
  let userKey: sshpk.Key;
  try {
    userKey = sshpk.parseKey(key, "ssh");
  } catch (e) {
    throw new AuthenticationError("Invalid key");
  }
  const fingerprint = userKey.fingerprint("sha256").hash;
  const enrolledKey = await prisma.userFingerprint.findUnique({
    where: { fingerprint },
    select: { fingerprint: true },
  });
  if (!enrolledKey) {
    throw new AuthenticationError("Invalid key");
  }

  await prisma.keyLoginChallenge.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });

  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  const nonce = randomBytes(32).toString("base64");
  const challenge = await prisma.keyLoginChallenge.create({
    data: {
      expiresAt,
      nonce,
      fingerprint,
    },
  });

  return {
    id: challenge.id,
    nonce: challenge.nonce,
    expiresAt: challenge.expiresAt.getTime(),
  };
};
