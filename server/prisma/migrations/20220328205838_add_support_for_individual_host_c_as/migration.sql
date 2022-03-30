/*
  Warnings:

  - Added the required column `caKey` to the `Host` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Extension" AS ENUM ('permit_X11_forwarding', 'permit_agent_forwarding', 'permit_port_forwarding', 'permit_pty', 'permit_user_rc');

-- DropForeignKey
ALTER TABLE "Subrole" DROP CONSTRAINT "Subrole_hostId_fkey";

-- DropForeignKey
ALTER TABLE "Subrole" DROP CONSTRAINT "Subrole_roleId_fkey";

-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "caKey" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Subrole" ADD COLUMN     "extensions" "Extension"[],
ADD COLUMN     "force_command" TEXT,
ADD COLUMN     "source_address" TEXT;

-- AddForeignKey
ALTER TABLE "Subrole" ADD CONSTRAINT "Subrole_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subrole" ADD CONSTRAINT "Subrole_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
