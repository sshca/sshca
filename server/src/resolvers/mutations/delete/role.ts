import { AuthenticationError, ForbiddenError } from "apollo-server-express";
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
  if (roleId === "Admin") {
    throw new ForbiddenError("Admin role may not be deleted");
  }
  await prisma.subrole.deleteMany({ where: { roleId } });
  await prisma.role.delete({ where: { id: roleId } });
  return { id: roleId };
};
