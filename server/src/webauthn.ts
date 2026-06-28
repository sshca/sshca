import type { AuthenticatorTransportFuture } from "@simplewebauthn/server";

export const PASSKEY_CHALLENGE_TTL_MS = 5 * 60 * 1000;

export const webauthnConfig = () => ({
  rpName: process.env.WEBAUTHN_RP_NAME,
  rpID: process.env.WEBAUTHN_RP_ID,
  origins: process.env.WEBAUTHN_ORIGIN.split(",").map((origin) =>
    origin.trim(),
  ),
});

export const challengeExpiresAt = () =>
  new Date(Date.now() + PASSKEY_CHALLENGE_TTL_MS);

export const userIdToHandle = (userId: string) =>
  Buffer.from(userId, "utf8").toString("base64url");

export const handleToUserId = (handle: string) =>
  Buffer.from(handle, "base64url").toString("utf8");

export const parseTransports = (
  transports: string[],
): AuthenticatorTransportFuture[] =>
  transports.filter((transport): transport is AuthenticatorTransportFuture =>
    ["ble", "cable", "hybrid", "internal", "nfc", "smart-card", "usb"].includes(
      transport,
    ),
  );
