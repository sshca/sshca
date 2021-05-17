# build environment
FROM node:16.1.0-alpine as build
WORKDIR /app
COPY . .
RUN yarn --frozen-lockfile
RUN yarn build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]