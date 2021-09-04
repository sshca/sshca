import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";
import sshpk from "sshpk";

export const generateHostKey = async (
  _: any,
  {
    key,
  }: {
    key: string;
  }
) => {
  const host = await prisma.host.findFirst({
    where: {
      fingerprint: sshpk.parseKey(key, "ssh").fingerprint("sha256").toString(),
    },
  });
  if (!host) {
    throw new AuthenticationError("Host not found");
  }
  const privateKey = sshpk.parsePrivateKey(process.env.SSH_KEY, "ssh");
  const userKey = sshpk.parseKey(key, "ssh");
  const cert = sshpk.createCertificate(
    sshpk.identityForHost(host.hostname),
    userKey,
    sshpk.identityForUser("sshca"),
    privateKey,
    { lifetime: 60 * 65 }
  );
  return cert.toString("openssh");
};
