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
  });
  if (userData) {
    if (compareSync(password, userData.password)) {
      res.cookie(
        "token",
        jwt.sign({ id: userData.id }, process.env.JWT_PRIVATE, {
          expiresIn: "2 days",
          algorithm: "RS256",
        }),
        {
          domain: "localhost",
          httpOnly: true,
        }
      );
      return { id: userData.id };
    }
  }
  throw new AuthenticationError("Invalid Username Or Password");
};
