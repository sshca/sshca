import { AuthenticationError } from "apollo-server-express";
import { compareSync } from "bcrypt";
import { Response } from "express";
import { setFullLoginCookie } from "../../../auth";
import prisma from "../../../prisma";

export const login = async (
  _: any,
  { email, password }: { email: string; password: string },
  { res }: { res: Response },
) => {
  const userData = await prisma.user.findFirst({
    where: { email },
    include: { roles: { select: { id: true } } },
  });
  if (userData) {
    if (compareSync(password, userData.password)) {
      const admin = Boolean(userData.roles.find((role) => role.id === "Admin"));
      setFullLoginCookie(res, userData.id);
      return { id: userData.id, admin };
    }
  }
  throw new AuthenticationError("Invalid username or password");
};
