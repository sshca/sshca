/*
  Warnings:

  - A unique constraint covering the columns `[fingerprint]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "fingerprint" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "User_fingerprint_key" ON "User"("fingerprint");
