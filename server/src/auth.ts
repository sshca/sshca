import { Response } from "express";
import jwt from "jsonwebtoken";
import { authCookieOptions } from "./cookies";

export const setFullLoginCookie = (res: Response, userId: string) => {
  res.cookie(
    "token",
    jwt.sign({ id: userId, fullLogin: true }, process.env.JWT_PRIVATE, {
      expiresIn: "2 days",
      algorithm: "RS256",
    }),
    authCookieOptions(),
  );
};
