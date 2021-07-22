import { hashSync } from "bcrypt";
import { Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../../../prisma";

export const firstUser = async (
  _: any,
  {
    email,
    password,
  }: {
    email: string;
    password: string;
  },
  { res }: { res: Response }
) => {
  if ((await prisma.user.count()) === 0) {
    const user = await prisma.user.create({
      data: { email, password: hashSync(password, 10) },
    });
    res.cookie(
      "token",
      jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "2 days",
      }),
      {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 2),
        domain: "localhost",
        httpOnly: true,
      }
    );
    return { id: user.id };
  }
};
