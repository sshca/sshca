import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const editUserRoles = async (
  _: any,
  {
    id: userId,
    roleIds,
  }: {
    id: string;
    roleIds: string[];
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const userData = await prisma.user.update({
    where: { id: userId },
    data: { roles: { set: roleIds.map((id) => ({ id })) } },
  });

  return userData;
};
