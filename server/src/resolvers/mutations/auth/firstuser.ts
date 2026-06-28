import { hashSync } from "bcrypt";
import { Response } from "express";
import { setFullLoginCookie } from "../../../auth";
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
  { res }: { res: Response },
) => {
  if ((await prisma.user.count()) === 0) {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashSync(password, 10),
        roles: { create: { name: "Admin", id: "Admin" } },
      },
    });
    setFullLoginCookie(res, user.id);
    return { id: user.id, admin: true };
  }
};
