import { randomInt } from "crypto";
import sshpk from "sshpk";
import prisma from "../../../prisma";

export const requestHostVerification = async (
  _: any,
  {
    key,
  }: {
    key: string;
  }
) => {
  const hostKey = sshpk.parseKey(key, "ssh");
  const hostFingerprint = hostKey.fingerprint();
  const id = randomInt(100000, 999999);
  await prisma.hostVerification.create({
    data: { fingerprint: hostFingerprint.toString(), id: id.toString() },
  });
  return id;
};
