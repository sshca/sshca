import { AuthenticationError, UserInputError } from "apollo-server-express";
import {
  AuthenticationResponseJSON,
  verifyAuthenticationResponse,
} from "@simplewebauthn/server";
import { decodeClientDataJSON } from "@simplewebauthn/server/helpers";
import { Response } from "express";
import { setFullLoginCookie } from "../../../auth";
import prisma from "../../../prisma";
import {
  handleToUserId,
  parseTransports,
  webauthnConfig,
} from "../../../webauthn";

export const completePasskeyLogin = async (
  _: any,
  { response }: { response: string },
  { res }: { res: Response },
) => {
  let parsedResponse: AuthenticationResponseJSON;
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
      type: "AUTHENTICATION",
      expiresAt: { gt: new Date() },
    },
  });
  if (!challenge) {
    throw new AuthenticationError("Invalid passkey challenge");
  }

  try {
    const passkey = await prisma.passkeyCredential.findUnique({
      where: { credentialId: parsedResponse.id },
      include: { user: { include: { roles: { select: { id: true } } } } },
    });
    if (!passkey) {
      throw new AuthenticationError("Invalid passkey");
    }

    const userHandle = parsedResponse.response.userHandle;
    if (userHandle && handleToUserId(userHandle) !== passkey.userId) {
      throw new AuthenticationError("Invalid passkey");
    }

    const { origins, rpID } = webauthnConfig();
    const verification = await verifyAuthenticationResponse({
      response: parsedResponse,
      expectedChallenge: challenge.challenge,
      expectedOrigin: origins,
      expectedRPID: rpID,
      requireUserVerification: true,
      credential: {
        id: passkey.credentialId,
        publicKey: passkey.publicKey,
        counter: passkey.counter,
        transports: parseTransports(passkey.transports),
      },
    });
    if (!verification.verified) {
      throw new AuthenticationError("Invalid passkey");
    }

    await prisma.passkeyCredential.update({
      where: { id: passkey.id },
      data: {
        counter: verification.authenticationInfo.newCounter,
        credentialDeviceType:
          verification.authenticationInfo.credentialDeviceType,
        credentialBackedUp: verification.authenticationInfo.credentialBackedUp,
        lastUsedAt: new Date(),
      },
    });

    const admin = Boolean(
      passkey.user.roles.find((role) => role.id === "Admin"),
    );
    setFullLoginCookie(res, passkey.userId);
    return { id: passkey.userId, admin };
  } finally {
    await prisma.passkeyChallenge.delete({ where: { id: challenge.id } });
  }
};
