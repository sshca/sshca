/*
  Warnings:

  - The `fingerprint` column on the `Host` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `fingerprint` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `fingerprint` on the `HostVerification` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Host" ALTER COLUMN "fingerprint" TYPE BYTEA
USING decode(regexp_replace("fingerprint",'.*:','')  || '=', 'base64');
-- -- AlterTable
ALTER TABLE "HostVerification" ALTER COLUMN "fingerprint" TYPE BYTEA
USING decode(regexp_replace("fingerprint",'.*:','')  || '=', 'base64');

-- -- AlterTable
ALTER TABLE "User" ALTER COLUMN "fingerprint" TYPE BYTEA
USING decode(regexp_replace("fingerprint",'.*:','')  || '=', 'base64');
