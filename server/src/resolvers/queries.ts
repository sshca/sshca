import { UserInputError } from "apollo-server-express";
import prisma from "../prisma";
import { verifyAuth } from "../verifyauth";
export const Query = {
  allRoles: (_parent: any, _args: any, { user }: { user: { id?: string } }) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.role.findMany();
  },
  allHosts: (_parent: any, _args: any, { user }: { user: { id?: string } }) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.host.findMany();
  },
  allUsers: (_parent: any, _args: any, { user }: { user: { id?: string } }) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.user.findMany();
  },
  user: (
    _: any,
    { id: userId }: { id: string },
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.user.findUnique({
      where: { id: userId },
      include: { roles: true },
    });
  },
  role: (
    _: any,
    { id: roleId }: { id: string },
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.role.findUnique({
      where: { id: roleId },
      include: { subroles: { include: { host: true } }, users: true },
    });
  },
  host: (
    _: any,
    { id: hostId }: { id: string },
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.host.findUnique({
      where: { id: hostId },
      include: { subroles: { include: { role: true } } },
    });
  },
  isFirstUser: async () => {
    return (await prisma.user.count()) === 0;
  },
};
