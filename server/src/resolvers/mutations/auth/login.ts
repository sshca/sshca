import { AuthenticationError } from "apollo-server-express";
import { compareSync } from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../../prisma";

export const login = async (
  _: any,
  { email, password }: { email: string; password: string },
  { res }: { res: Response }
) => {
  const userData = await prisma.user.findFirst({
    where: { email },
    include: { roles: { select: { id: true } } },
  });
  if (userData) {
    if (compareSync(password, userData.password)) {
      if (!userData?.roles.find((role) => role.id === "Admin")) {
        throw new AuthenticationError(
          "Only admins may login to management interface"
        );
      }
      res.cookie(
        "token",
        jwt.sign({ id: userData.id }, process.env.JWT_PRIVATE, {
          expiresIn: "2 days",
          algorithm: "RS256",
        }),
        {
          domain: process.env.DOMAIN,
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        }
      );
      return { id: userData.id };
    }
  }
  throw new AuthenticationError("Invalid username or password");
};
