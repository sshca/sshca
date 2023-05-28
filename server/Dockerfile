FROM node:16 as base
WORKDIR /app

COPY package.json ./

FROM base as build 
RUN export NODE_ENV=production
RUN yarn --frozen-lockfile

COPY . .
RUN yarn run prisma:generate
RUN yarn build

FROM base as prod-build

RUN yarn install --production
COPY prisma prisma
RUN yarn run prisma:generate

FROM base as prod

COPY --from=prod-build /app/node_modules /app/node_modules
COPY --from=build  /app/dist /app/dist
COPY --from=build  /app/prisma /app/prisma
COPY --from=build  /app/.env.example /app/.env.example

EXPOSE 3000
CMD ["yarn", "start"]