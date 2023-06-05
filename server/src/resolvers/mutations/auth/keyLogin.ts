import { AuthenticationError } from "apollo-server-express";
import { Response } from "express";
import jwt from "jsonwebtoken";
import sshpk from "sshpk";
import prisma from "../../../prisma";

export const keyLogin = async (
  _: any,
  { key }: { key: string },
  { res }: { res: Response }
) => {
  const userKey = sshpk.parseKey(key, "ssh");
  const userData = await prisma.user.findFirst({
    where: { fingerprint: userKey.fingerprint("sha256").hash },
    include: { roles: { select: { id: true } } },
  });
  if (userData) {
    res.cookie(
      "token",
      jwt.sign(
        { id: userData.id, admin: false, fullLogin: false },
        process.env.JWT_PRIVATE,
        {
          expiresIn: "2 days",
          algorithm: "RS256",
        }
      ),
      {
        domain: process.env.DOMAIN,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      }
    );
    return userData.id;
  }
  throw new AuthenticationError("Invalid username or password");
};
