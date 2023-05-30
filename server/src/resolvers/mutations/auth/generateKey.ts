import { AuthenticationError } from "apollo-server-express";
import sshpk from "sshpk";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const generateKey = async (
  _: any,
  {
    key,
    subroleId,
  }: {
    key: string;
    subroleId: string;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user, false, false)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const subrole = await prisma.subrole.findFirst({
    where: { role: { users: { some: { id: user.id } } }, id: subroleId },
    select: {
      id: true,
      host: { select: { caKey: true } },
      extensions: true,
      force_command: true,
      source_address: true,
      username: true,
    },
  });
  if (!subrole) {
    throw new AuthenticationError(`User does not have subrole ${subroleId}`);
  }
  const privateKey = sshpk.parsePrivateKey(subrole.host.caKey, "ssh");
  const userKey = sshpk.parseKey(key, "ssh");
  await prisma.user.update({
    where: { id: user.id! },
    data: { fingerprint: userKey.fingerprint("sha256").toString() },
  });
  const cert = sshpk.createCertificate(
    [sshpk.identityForUser(subrole.username)],
    userKey,
    sshpk.identityForUser("sshca"),
    privateKey,
    {
      validFrom: new Date(Date.now() - 5000),
      validUntil: new Date(Date.now() + 10 * 1000 * 60),
    }
  );

  cert.signatures.openssh!.exts = [
    ...subrole.extensions.map((extension) => ({
      name: extension.replaceAll("_", "-"),
      critical: false,
      data: Buffer.from(""),
    })),
  ];
  if (subrole.force_command) {
    const extbuf = Buffer.alloc(4 + subrole.force_command.length);
    extbuf.writeInt32BE(subrole.force_command.length);
    extbuf.write(subrole.force_command, 4);
    cert.signatures.openssh!.exts.push({
      name: "force-command",
      critical: true,
      data: extbuf,
    });
  }
  if (subrole.source_address) {
    const extbuf = Buffer.alloc(4 + subrole.source_address.length);
    extbuf.writeInt32BE(subrole.source_address.length);
    extbuf.write(subrole.source_address, 4);
    cert.signatures.openssh!.exts.push({
      name: "source-address",
      critical: true,
      data: extbuf,
    });
  }
  cert.signatures.openssh!.keyId = `SSHCA certifcate\nUser:${user.id}\nSubrole:${subrole.id}`;
  // @ts-expect-error
  const signer = privateKey.createSign("sha512");
  // @ts-expect-error
  const blob = sshpk.Certificate.formats.openssh.toBuffer(cert, true);
  signer.write(blob);
  cert.signatures.openssh!.signature = signer.sign();
  return cert.toString("openssh");
};
