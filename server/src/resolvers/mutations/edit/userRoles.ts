import { UserInputError } from "apollo-server-express";
import { compareSync, hashSync } from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
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
    throw new UserInputError("Invalid Auth");
  }
  const userData = await prisma.user.update({
    where: { id: userId },
    data: { roles: { connect: roleIds.map((id) => ({ id })) } },
  });

  return userData;
};
