import { AuthenticationError } from "apollo-server-express";
import sshpk from "sshpk";
import prisma from "../../../prisma";

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
    {
      validFrom: new Date(Date.now() - 5000),
      validUntil: new Date(Date.now() + 1000 * 60 * 60 * 2),
    }
  );
  // @ts-expect-error
  const signer = privateKey.createSign("sha512");
  // @ts-expect-error
  const blob = sshpk.Certificate.formats.openssh.toBuffer(cert, true);
  signer.write(blob);
  cert.signatures.openssh!.signature = signer.sign();
  const hostKey = sshpk.parsePrivateKey(host.caKey);
  return {
    cert: cert.toString("openssh"),
    caPub: hostKey.toPublic().toString("ssh"),
  };
};
