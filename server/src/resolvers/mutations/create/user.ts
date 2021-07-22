import { AuthenticationError } from "apollo-server-express";
import { hashSync } from "bcrypt";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const createUser = async (
  _: any,
  { email, password }: { email: string; password: string },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const userData = await prisma.user.create({
    data: { email, password: hashSync(password, 10) },
  });
  return userData;
};
