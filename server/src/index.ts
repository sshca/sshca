import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import express from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { resolvers } from "./resolvers";
//@ts-expect-error
import typeDefs from "./schema/types.gql";
import { config } from "dotenv-safe";
config();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx) => {
      try {
        return {
          ...ctx,
          user: {
            id: ctx.req.cookies.token
              ? (
                  jwt.verify(ctx.req.cookies.token, process.env.JWT_PUBLIC, {
                    algorithms: ["RS256"],
                  }) as JwtPayload
                ).id
              : undefined,
          },
        };
      } catch (e) {
        return ctx;
      }
    },
  });
  await server.start();
  const app = express();
  app.use(cookieParser());
  server.applyMiddleware({ app, path: "/api/graphql" });
  await new Promise<void>((resolve) =>
    app.listen({ port: 4000 }, () => resolve())
  );
  console.log(`🚀 Server ready at port 4000 with path ${server.graphqlPath}`);
}
startApolloServer();
