import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";
import { generateKeyPairSync } from "crypto";

export const createHost = async (
  _: any,
  { name, hostname }: { name: string; hostname: string },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const key = generateKeyPairSync("rsa", {
    modulusLength: 4096,
    privateKeyEncoding: { format: "pem", type: "pkcs1" },
    publicKeyEncoding: { format: "pem", type: "pkcs1" },
  });
  const host = await prisma.host.create({
    data: { name, hostname, caKey: key.privateKey },
  });
  return { ...host, caPub: key.publicKey };
};
