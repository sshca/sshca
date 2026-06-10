import { CookieOptions } from "express";

export const authCookieOptions = (): CookieOptions => ({
  domain: process.env.DOMAIN,
  httpOnly: true,
  sameSite: "strict",
  secure: process.env.NODE_ENV?.toLowerCase() === "production",
});
