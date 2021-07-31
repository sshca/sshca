import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const deleteRole = async (
  _: any,
  {
    id: roleId,
  }: {
    id: string;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  await prisma.subrole.deleteMany({ where: { roleId } });
  await prisma.role.delete({ where: { id: roleId } });
  return { id: roleId };
};
