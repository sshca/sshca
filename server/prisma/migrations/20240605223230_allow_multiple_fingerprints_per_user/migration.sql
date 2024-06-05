/*
  Warnings:

  - You are about to drop the column `fingerprint` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_fingerprint_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "fingerprint";

-- CreateTable
CREATE TABLE "UserFingerprint" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fingerprint" BYTEA NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserFingerprint_pkey" PRIMARY KEY ("fingerprint")
);

-- AddForeignKey
ALTER TABLE "UserFingerprint" ADD CONSTRAINT "UserFingerprint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
