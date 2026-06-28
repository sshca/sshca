import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const deletePasskeyCredential = async (
  _: any,
  { id }: { id: string },
  { user }: { user: { id?: string; admin?: boolean; fullLogin?: boolean } },
) => {
  if (!verifyAuth(user) || !user.id) {
    throw new AuthenticationError("Invalid Auth");
  }

  const passkey = await prisma.passkeyCredential.findUnique({
    where: { id },
    select: { id: true, userId: true },
  });
  if (!passkey || passkey.userId !== user.id) {
    throw new AuthenticationError("Invalid Auth");
  }

  await prisma.passkeyCredential.delete({ where: { id } });
  return { id };
};
