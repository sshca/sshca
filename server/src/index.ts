import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import { config } from "dotenv-safe";
import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
import { resolvers } from "./resolvers";
import { Query } from "./resolvers/queries";
import typeDefs from "./schema/types";
config();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx) => {
      try {
        return {
          ...ctx,
          user: ctx.req.cookies.token
            ? (jwt.verify(ctx.req.cookies.token, process.env.JWT_PUBLIC!, {
                algorithms: ["RS256"],
              }) as JwtPayload)
            : { id: undefined },
        };
      } catch (e) {
        return ctx;
      }
    },
  });
  await server.start();
  const app = express();
  app.use(express.static("build"));
  app.use(cookieParser());
  server.applyMiddleware({ app, path: "/api/graphql" });
  app.get("/key", async (req, res) => {
    res.send(await Query.key());
  });
  app.get("*", function (request, response) {
    response.sendFile(path.resolve("build", "index.html"));
  });
  await new Promise<void>((resolve) =>
    app.listen({ port: 4000 }, () => resolve())
  );
  console.log(`🚀 Server ready at port 4000 with path ${server.graphqlPath}`);
}
startApolloServer();
