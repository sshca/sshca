/*
  Before applying this migration to an existing database, resolve any duplicate
  User.email values and duplicate non-null Host.fingerprint values. The unique
  indexes below intentionally fail if conflicting data remains.
*/

-- CreateTable
CREATE TABLE "KeyLoginChallenge" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "nonce" TEXT NOT NULL,
    "fingerprint" BYTEA NOT NULL,

    CONSTRAINT "KeyLoginChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Host_fingerprint_key" ON "Host"("fingerprint");

-- Replace UserFingerprint FK with cascading delete behavior.
ALTER TABLE "UserFingerprint" DROP CONSTRAINT "UserFingerprint_userId_fkey";
ALTER TABLE "UserFingerprint" ADD CONSTRAINT "UserFingerprint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
