import { AuthenticationError, UserInputError } from "apollo-server-express";
import sshpk from "sshpk";
import prisma from "../../../prisma";
import { verifyAuth } from "../../../verifyauth";

export const createCustomCertificate = async (
  _: any,
  {
    user: certUser,
    extensions,
    options,
    key,
    expiry,
  }: {
    user: string;
    extensions: {
      permit_X11_forwarding: boolean;
      permit_agent_forwarding: boolean;
      permit_port_forwarding: boolean;
      permit_pty: boolean;
      permit_user_rc: boolean;
    };
    options: {
      force_command: { value: string; enabled: boolean };
      source_address: { value: string; enabled: boolean };
    };
    key: string;
    expiry: number;
  },
  { user }: { user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new AuthenticationError("Invalid Auth");
  }
  const privateKey = sshpk.parsePrivateKey(process.env.SSH_KEY, "ssh");
  const userKey = sshpk.parseKey(key, "ssh");
  const cert = sshpk.createCertificate(
    sshpk.identityForUser(certUser),
    userKey,
    sshpk.identityForUser("sshca"),
    privateKey,
    {
      validFrom: new Date(Date.now() - 5000),
      validUntil: new Date(expiry),
    }
  );
  cert.signatures.openssh!.exts = [
    ...(Object.keys(extensions) as (keyof typeof extensions)[])
      .filter((extension) => extensions[extension])
      .map((extension) => ({
        name: extension.replaceAll("_", "-"),
        critical: false,
        data: Buffer.from(""),
      })),
    ...(
      (Object.keys(options) as (keyof typeof options)[]).filter(
        (option) => options[option].enabled
      ) as (keyof typeof options)[]
    ).map((option) => ({
      name: option.replaceAll("_", "-"),
      critical: true,
      data: Buffer.from(options[option].value),
    })),
  ];
  // @ts-expect-error
  const signer = privateKey.createSign("sha512");
  // @ts-expect-error
  const blob = sshpk.Certificate.formats.openssh.toBuffer(cert, true);
  signer.write(blob);
  cert.signatures.openssh!.signature = signer.sign();
  return cert.toString("openssh");
};
