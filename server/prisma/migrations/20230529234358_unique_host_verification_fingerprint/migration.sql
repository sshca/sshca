/*
  Warnings:

  - A unique constraint covering the columns `[fingerprint]` on the table `HostVerification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HostVerification_fingerprint_key" ON "HostVerification"("fingerprint");
