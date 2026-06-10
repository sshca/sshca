import { PrismaPg } from "@prisma/adapter-pg";
import { config } from "dotenv-safe";
import path from "path";
import { PrismaClient } from "./generated/index";

config({
  path: path.resolve(__dirname, "../.env"),
  example: path.resolve(__dirname, "../.env.example"),
});

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export default prisma;
