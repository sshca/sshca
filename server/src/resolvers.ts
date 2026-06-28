import { Query } from "./resolvers/queries";
import { Mutation } from "./resolvers/mutations";

export const resolvers = {
  Query,
  Mutation,
  PasskeyCredential: {
    createdAt: (passkey: { createdAt: Date | number }) =>
      passkey.createdAt instanceof Date
        ? passkey.createdAt.getTime()
        : passkey.createdAt,
    lastUsedAt: (passkey: { lastUsedAt?: Date | number | null }) =>
      passkey.lastUsedAt instanceof Date
        ? passkey.lastUsedAt.getTime()
        : passkey.lastUsedAt || null,
  },
};
