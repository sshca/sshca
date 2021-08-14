-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "fingerprint" TEXT;

-- CreateTable
CREATE TABLE "HostVerification" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fingerprint" TEXT NOT NULL,

    PRIMARY KEY ("id")
);
