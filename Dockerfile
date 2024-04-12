FROM node:18 as base
WORKDIR /app

RUN yarn set version stable
COPY package.json ./
COPY yarn.lock ./
RUN mkdir web server
COPY web/package.json ./web/
COPY server/package.json ./server/

FROM base as web-build
RUN export NODE_ENV=production
RUN yarn workspaces focus web
COPY ./web ./web
RUN yarn workspace web build

FROM base as server-build 
RUN export NODE_ENV=production

RUN yarn workspaces focus server
COPY ./server ./server
RUN cd server && yarn pnpify prisma generate
RUN yarn workspace server build

FROM base as prod

RUN yarn workspaces focus server --production
COPY --from=web-build  /app/web/build /app/server/build
COPY --from=server-build  /app/server/dist /app/server/dist
COPY --from=server-build  /app/server/prisma /app/server/prisma
COPY --from=server-build  /app/server/src/generated /app/server/src/generated
COPY --from=server-build  /app/server/.env.example /app/server/.env.example
ENV NODE_ENV=production

EXPOSE 3000
CMD ["yarn", "workspace", "server", "start"]