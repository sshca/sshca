import { Extension } from "@prisma/client";
import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const editRoleSubroles = async (
  _: any,
  {
    id: roleId,
    subroles,
  }: {
    id: string;
    subroles: {
      username: string;
      hostId: string;
      extensions: Extension[];
      force_command?: string;
      source_address?: string;
    }[];
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  return await prisma.role.update({
    where: { id: roleId },
    data: { subroles: { deleteMany: {}, create: subroles } },
  });
};
