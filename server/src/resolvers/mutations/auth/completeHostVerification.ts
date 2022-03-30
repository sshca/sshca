import { AuthenticationError, UserInputError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const completeHostVerification = async (
  _: any,
  {
    id: verificationId,
    hostId,
    accepted,
  }: {
    id?: string;
    hostId: string;
    accepted: boolean;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  if (accepted && verificationId) {
    const verification = await prisma.hostVerification.findUnique({
      where: { id: verificationId },
    });
    if (!verification) {
      throw new UserInputError("Invalid Verification");
    }
    await prisma.host.update({
      where: { id: hostId },
      data: { fingerprint: verification.fingerprint },
    });
    await prisma.hostVerification.delete({ where: { id: verificationId } });
    return hostId;
  }
  await prisma.hostVerification.delete({ where: { id: verificationId } });
  return;
};
