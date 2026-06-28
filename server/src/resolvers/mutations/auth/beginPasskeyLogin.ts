import { generateAuthenticationOptions } from "@simplewebauthn/server";
import prisma from "../../../prisma";
import { challengeExpiresAt, webauthnConfig } from "../../../webauthn";

export const beginPasskeyLogin = async () => {
  await prisma.passkeyChallenge.deleteMany({
    where: { expiresAt: { lt: new Date() } },
  });

  const { rpID } = webauthnConfig();
  const options = await generateAuthenticationOptions({
    rpID,
    userVerification: "required",
  });

  await prisma.passkeyChallenge.create({
    data: {
      challenge: options.challenge,
      expiresAt: challengeExpiresAt(),
      type: "AUTHENTICATION",
    },
  });

  return JSON.stringify(options);
};
