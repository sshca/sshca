import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const deleteHost = async (
  _: any,
  {
    id: hostId,
  }: {
    id: string;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  await prisma.subrole.deleteMany({ where: { hostId } });
  await prisma.host.delete({ where: { id: hostId } });
  return { id: hostId };
};
