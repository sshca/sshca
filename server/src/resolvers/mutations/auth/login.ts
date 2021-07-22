import prisma from "../../../prisma";
import { hashSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { Response } from "express";
import { UserInputError } from "apollo-server-express";
import { verifyAuth } from "../../../verifyauth";

export const login = async (
  _: any,
  { email, password }: { email: string; password: string },
  { res, user }: { res: Response; user: { id?: string } }
) => {
  if (!verifyAuth(user)) {
    throw new UserInputError("Invalid Auth");
  }
  const userData = await prisma.user.findFirst({
    where: { email },
  });
  if (userData) {
    if (compareSync(password, userData.password)) {
      res.cookie(
        "token",
        jwt.sign({ id: userData.id }, process.env.JWT_SECRET, {
          expiresIn: "2 days",
        }),
        {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
          domain: "localhost",
          httpOnly: true,
        }
      );
      return { id: userData.id };
    }
  }
};
