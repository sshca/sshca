import { UserInputError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const createRole = async (
  _: any,
  {
    name,
    subroles,
  }: {
    name: string;
    subroles: { username: string; hostId: string }[];
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new UserInputError("Invalid Auth");
  }

  const role = await prisma.role.create({
    data: { name, subroles: { create: subroles } },
  });
  return role;
};
