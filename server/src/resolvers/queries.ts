import { AuthenticationError, UserInputError } from "apollo-server-express";
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
    return await prisma.hostVerification.findUnique({
      where: { id: requestId },
    });
  },
  hostPrincipals: async (
    _: any,
    {
      key,
    }: {
      key: string;
    }
  ) => {
    const host = await prisma.host.findFirst({
      where: {
        fingerprint: sshpk
          .parseKey(key, "ssh")
          .fingerprint("sha256")
          .toString(),
      },
      include: {
        subroles: true,
      },
    });
    if (!host) {
      throw new AuthenticationError("Host not found");
    }
    return host.subroles.map((subrole) => ({
      username: subrole.username,
      id: subrole.id,
    }));
  },
  listSubroles: async (
    _parent: any,
    _args: any,
    { user }: { user: { id?: string } }
  ) => {
    if (!verifyAuth(user, false)) {
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
                host: { select: { name: true, hostname: true } },
              },
            },
          },
        },
      },
    });
    return userData!.roles
      .map((role) =>
        role.subroles.map((subrole) => ({
          id: subrole.id,
          hostName: subrole.host.hostname,
          user: subrole.username,
        }))
      )
      .flat();
  },
  hostVerificationStatuses: async () => {
    return await prisma.hostVerification.findMany({});
  },
};
