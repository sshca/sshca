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
      data: {
        email,
        password: hashSync(password, 10),
        roles: { create: { name: "Admin", id: "Admin" } },
      },
    });
    res.cookie(
      "token",
      jwt.sign(
        { id: user.id, admin: true, fullLogin: true },
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
    return { id: user.id };
  }
};
