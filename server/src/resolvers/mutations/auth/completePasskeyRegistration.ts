import { AuthenticationError, UserInputError } from "apollo-server-express";
import {
  RegistrationResponseJSON,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";
import { decodeClientDataJSON } from "@simplewebauthn/server/helpers";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";
import { webauthnConfig } from "../../../webauthn";

export const completePasskeyRegistration = async (
  _: any,
  { response, name }: { response: string; name?: string },
  { user }: { user: { id?: string; admin?: boolean; fullLogin?: boolean } },
) => {
  if (!verifyAuth(user) || !user.id) {
    throw new AuthenticationError("Invalid Auth");
  }

  let parsedResponse: RegistrationResponseJSON;
  try {
    parsedResponse = JSON.parse(response);
  } catch (e) {
    throw new UserInputError("Invalid passkey response");
  }

  const clientData = decodeClientDataJSON(
    parsedResponse.response.clientDataJSON,
  );
  const challenge = await prisma.passkeyChallenge.findFirst({
    where: {
      challenge: clientData.challenge,
      type: "REGISTRATION",
      userId: user.id,
      expiresAt: { gt: new Date() },
    },
  });
  if (!challenge) {
    throw new AuthenticationError("Invalid passkey challenge");
  }

  try {
    const { origins, rpID } = webauthnConfig();
    const verification = await verifyRegistrationResponse({
      response: parsedResponse,
      expectedChallenge: challenge.challenge,
      expectedOrigin: origins,
      expectedRPID: rpID,
      requireUserVerification: true,
    });
    if (!verification.verified) {
      throw new AuthenticationError("Invalid passkey response");
    }

    const { credential, credentialDeviceType, credentialBackedUp } =
      verification.registrationInfo;
    return await prisma.passkeyCredential.create({
      data: {
        credentialId: credential.id,
        publicKey: Buffer.from(credential.publicKey),
        counter: credential.counter,
        transports: parsedResponse.response.transports || [],
        name: name || null,
        credentialDeviceType,
        credentialBackedUp,
        userId: user.id,
      },
    });
  } finally {
    await prisma.passkeyChallenge.delete({ where: { id: challenge.id } });
  }
};
