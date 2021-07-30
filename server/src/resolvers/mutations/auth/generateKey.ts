import { AuthenticationError } from "apollo-server-express";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";
import sshpk from "sshpk";

export const generateKey = async (
  _: any,
  {
    key,
  }: {
    key: string;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const userData = await prisma.user.findUnique({
    where: { id: user.id },
    include: { roles: { include: { subroles: true } } },
  });
  if (!userData) {
    throw new AuthenticationError("Invalid Auth");
  }
  const principals = userData.roles
    .map((r) =>
      r.subroles.map((s) => sshpk.identityForUser(`sshca_subrole_${s.id}`))
    )
    .flat();
  if (principals.length === 0) {
    throw new AuthenticationError("User has no roles");
  }
  const privateKey = sshpk.parsePrivateKey(process.env.SSH_KEY, "ssh");
  const userKey = sshpk.parseKey(key, "ssh");
  const certificate = sshpk.createCertificate(
    principals,
    userKey,
    sshpk.identityForUser("sshca"),
    privateKey
  );
  certificate.signatures.openssh.exts = [
    "permit-X11-forwarding",
    "permit-agent-forwarding",
    "permit-port-forwarding",
    "permit-pty",
    "permit-user-rc",
  ].map((r) => ({ name: r, critical: false, data: Buffer.from("") }));
  certificate.signWith(privateKey);

  return certificate.toString("openssh");
};
