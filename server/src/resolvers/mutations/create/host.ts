import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const createHost = async (
  _: any,
  { name, hostname }: { name: string; hostname: string },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const host = await prisma.host.create({ data: { name, hostname } });
  return host;
};
