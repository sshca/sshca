/*
  Warnings:

  - The primary key for the `Host` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Role` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Subrole` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__RoleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__RoleToUser" ("A", "B") SELECT "A", "B" FROM "_RoleToUser";
DROP TABLE "_RoleToUser";
ALTER TABLE "new__RoleToUser" RENAME TO "_RoleToUser";
CREATE UNIQUE INDEX "_RoleToUser_AB_unique" ON "_RoleToUser"("A", "B");
CREATE INDEX "_RoleToUser_B_index" ON "_RoleToUser"("B");
CREATE TABLE "new_Host" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "hostname" TEXT NOT NULL
);
INSERT INTO "new_Host" ("createdAt", "hostname", "id", "name", "updatedAt") SELECT "createdAt", "hostname", "id", "name", "updatedAt" FROM "Host";
DROP TABLE "Host";
ALTER TABLE "new_Host" RENAME TO "Host";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("createdAt", "email", "id", "password", "updatedAt") SELECT "createdAt", "email", "id", "password", "updatedAt" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE TABLE "new_Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Role" ("createdAt", "id", "name", "updatedAt") SELECT "createdAt", "id", "name", "updatedAt" FROM "Role";
DROP TABLE "Role";
ALTER TABLE "new_Role" RENAME TO "Role";
CREATE TABLE "new_Subrole" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "username" TEXT NOT NULL,
    "hostId" TEXT NOT NULL,
    "roleId" TEXT NOT NULL,
    FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("hostId") REFERENCES "Host" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Subrole" ("createdAt", "hostId", "id", "roleId", "updatedAt", "username") SELECT "createdAt", "hostId", "id", "roleId", "updatedAt", "username" FROM "Subrole";
DROP TABLE "Subrole";
ALTER TABLE "new_Subrole" RENAME TO "Subrole";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
