import { AuthenticationError } from "apollo-server-express";
import { generateRegistrationOptions } from "@simplewebauthn/server";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";
import {
  challengeExpiresAt,
  parseTransports,
  userIdToHandle,
  webauthnConfig,
} from "../../../webauthn";

export const beginPasskeyRegistration = async (
  _: any,
  _args: any,
  { user }: { user: { id?: string; admin?: boolean; fullLogin?: boolean } },
) => {
  if (!verifyAuth(user) || !user.id) {
    throw new AuthenticationError("Invalid Auth");
  }

  const userData = await prisma.user.findUnique({
    where: { id: user.id },
    include: { passkeys: true },
  });
  if (!userData) {
    throw new AuthenticationError("Invalid Auth");
  }

  await prisma.passkeyChallenge.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });

  const { rpName, rpID } = webauthnConfig();
  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    userName: userData.email,
    userID: Buffer.from(userData.id, "utf8"),
    userDisplayName: userData.email,
    attestationType: "none",
    excludeCredentials: userData.passkeys.map((passkey) => ({
      id: passkey.credentialId,
      transports: parseTransports(passkey.transports),
    })),
    authenticatorSelection: {
      residentKey: "required",
      requireResidentKey: true,
      userVerification: "required",
    },
  });

  options.user.id = userIdToHandle(userData.id);

  await prisma.passkeyChallenge.create({
    data: {
      challenge: options.challenge,
      expiresAt: challengeExpiresAt(),
      type: "REGISTRATION",
      userId: userData.id,
    },
  });

  return JSON.stringify(options);
};
