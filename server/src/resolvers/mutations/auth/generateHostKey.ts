import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
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
    { lifetime: 60 * 60 * 24 * 365 * 10 }
  );
  const hostKey = sshpk.parsePrivateKey(host.caKey);
  return {
    cert: cert.toString("openssh"),
    caPub: hostKey.toPublic().toString("ssh"),
  };
};
