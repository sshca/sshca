import { UserInputError } from "apollo-server-express";
import sshpk from "sshpk";
import prisma from "../prisma";
import { verifyAuth } from "../verifyauth";
export const Query = {
  allRoles: (_parent: any, _args: any, { user }: { user: { id?: string } }) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return prisma.role.findMany();
  },
  allHosts: async (
    _parent: any,
    _args: any,
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return (await prisma.host.findMany()).map((host) => ({
      ...host,
      fingerprint: host.fingerprint?.toString("base64"),
    }));
  },
  allUsers: async (
    _parent: any,
    _args: any,
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return (await prisma.user.findMany()).map((user) => ({
      ...user,
      fingerprint: user.fingerprint?.toString("base64"),
    }));
  },
  user: async (
    _: any,
    { id: userId }: { id: string },
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    const fetchedUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { roles: true },
    });
    return {
      ...fetchedUser,
      fingerprint: fetchedUser?.fingerprint?.toString("base64"),
    };
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
      include: {
        subroles: {
          select: {
            extensions: true,
            host: true,
            username: true,
            id: true,
            hostId: true,
          },
        },
        users: true,
      },
    });
  },
  host: async (
    _: any,
    { id: hostId }: { id: string },
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    const host = await prisma.host.findUnique({
      where: { id: hostId },
      include: { subroles: { include: { role: true } } },
    });
    return host
      ? {
          ...host,
          fingerprint: host.fingerprint?.toString("base64"),
          caPub: sshpk.parsePrivateKey(host.caKey).toPublic().toString("ssh"),
        }
      : null;
  },
  isFirstUser: async () => (await prisma.user.count()) === 0,
  key: async () =>
    sshpk
      .parsePrivateKey(process.env.SSH_KEY, "ssh")
      .toPublic()
      .toString("ssh"),
  hostVerificationStatus: async (_: any, { id: requestId }: { id: string }) => {
    const status = await prisma.hostVerification.findUnique({
      where: { id: requestId },
    });
    return { ...status, fingerprint: status?.fingerprint.toString("base64") };
  },
  listSubroles: async (
    _parent: any,
    _args: any,
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user, false, false)) {
      throw new UserInputError("Invalid Auth");
    }
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        roles: {
          include: {
            subroles: {
              select: {
                id: true,
                username: true,
                hostId: true,
                host: { select: { name: true, hostname: true, id: true } },
              },
            },
          },
        },
      },
    });
    return userData!.roles.map((role) => role.subroles).flat();
  },
  hostVerificationStatuses: async (
    _parent: any,
    _args: any,
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user)) {
      throw new UserInputError("Invalid Auth");
    }
    return (await prisma.hostVerification.findMany()).map((verification) => ({
      ...verification,
      fingerprint: verification.fingerprint?.toString("base64"),
    }));
  },
};
