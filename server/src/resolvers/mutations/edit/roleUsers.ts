import { UserInputError } from "apollo-server-express";
import { compareSync, hashSync } from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const editRoleUsers = async (
  _: any,
  {
    id: roleId,
    userIds,
  }: {
    id: string;
    userIds: string[];
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new UserInputError("Invalid Auth");
  }
  const userData = await prisma.role.update({
    where: { id: roleId },
    data: { users: { connect: userIds.map((id) => ({ id })) } },
  });

  return userData;
};
