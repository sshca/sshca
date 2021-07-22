import { UserInputError } from "apollo-server-express";
import { compareSync, hashSync } from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
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
    throw new UserInputError("Invalid Auth");
  }
  prisma.user.delete({ where: { id: userId } });
  return { id: userId };
};
