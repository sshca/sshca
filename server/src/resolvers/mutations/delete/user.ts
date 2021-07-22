import { AuthenticationError, UserInputError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const deleteUser = async (
  _: any,
  {
    id: userId,
  }: {
    id: string;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  if (userId === user.id) {
    throw new UserInputError("Cannot delete yourself");
  }
  await prisma.user.delete({ where: { id: userId } });
  return { id: userId };
};
