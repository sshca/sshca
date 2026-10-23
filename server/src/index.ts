import { expressMiddleware } from "@as-integrations/express5";
import { ApolloServer } from "@apollo/server";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv-safe";
import express, { type Request, type Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import { resolvers } from "./resolvers";
import { Query } from "./resolvers/queries";
import prisma from "./prisma";
import typeDefs from "./schema/types";
config();

async function startApolloServer() {
  const server = new ApolloServer<{
    user: { id?: string; fullLogin?: boolean; admin?: boolean };
    req: Request;
    res: Response;
  }>({
    typeDefs,
    resolvers,
  });
  await server.start();
  const app = express();
  app.use(express.static("build"));
  app.use(cookieParser());
  app.use(
    "/api/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        try {
          const payload = req.cookies.token
            ? (jwt.verify(req.cookies.token, process.env.JWT_PUBLIC!, {
                algorithms: ["RS256"],
              }) as JwtPayload)
            : undefined;
          const id = typeof payload?.id === "string" ? payload.id : undefined;
          const fullLogin = Boolean(payload?.fullLogin);
          const userData = id
            ? await prisma.user.findUnique({
                where: { id },
                select: { roles: { select: { id: true } } },
              })
            : null;
          const admin = fullLogin
            ? Boolean(userData?.roles.find((role) => role.id === "Admin"))
            : false;
          return {
            req,
            res,
            user: userData && id ? { id, fullLogin, admin } : {},
          };
        } catch {
          return { req, res, user: {} };
        }
      },
    }),
  );
  app.get("/key", async (req, res) => {
    res.send(await Query.key());
  });
  app.get("/{*path}", function (request, response) {
    response.sendFile(path.resolve("build", "index.html"));
  });
  await new Promise<void>((resolve) =>
    app.listen({ port: 4000 }, () => resolve())
  );
  console.log("🚀 Server ready at port 4000 with path /api/graphql");
}
startApolloServer();
