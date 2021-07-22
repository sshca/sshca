// @ts-expect-error
import typeDefs from "./schema/types.gql";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import cookieParser from "cookie-parser";
import jwt, { JwtPayload } from "jsonwebtoken";
import express from "express";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx) => {
      return {
        ...ctx,
        user: {
          id: ctx.req.cookies.token
            ? (jwt.verify(
                ctx.req.cookies.token,
                process.env.JWT_SECRET
              ) as JwtPayload)
            : undefined,
        },
      };
    },
  });
  await server.start();
  const app = express();
  app.use(cookieParser());
  server.applyMiddleware({ app, path: "/api/graphql" });
  await new Promise<void>((resolve) =>
    app.listen({ port: 4000 }, () => resolve())
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer();
