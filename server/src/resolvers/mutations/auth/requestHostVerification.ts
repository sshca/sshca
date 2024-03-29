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
  if (
    (await prisma.host.findFirst({
      where: { fingerprint: hostFingerprint.hash },
    })) !== null
  ) {
    return { finished: true };
  }
  const id = randomInt(100000, 999999);
  await prisma.hostVerification.upsert({
    where: { fingerprint: hostFingerprint.hash },
    create: { fingerprint: hostFingerprint.hash, id: id.toString() },
    update: {},
  });
  return { id, finished: false };
};
