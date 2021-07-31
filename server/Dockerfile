FROM node:16 as build
WORKDIR /src/app
COPY . .
RUN yarn install --frozen-lockfile
ENV NODE_ENV=production
RUN yarn build
RUN sed -i -e 's/sqlite/postgres/' prisma/schema.prisma
CMD ["node", "dist/server.js"]