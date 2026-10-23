const { context } = require("esbuild");

context({
  entryPoints: ["src/index.ts"],
  platform: "node",
  minify: true,
  bundle: true,
  outfile: "dist/server.js",
  external: [
    "@apollo/server",
    "@as-integrations/express5",
    "@prisma/adapter-pg",
    "jsonwebtoken",
    "bcrypt",
    "sshpk",
    "graphql-tag",
    "graphql",
    "express",
    "cors",
    "dotenv-safe",
    "cookie-parser",
    "@prisma/client",
  ],
})
  .then((ctx) => ctx.watch())
  .catch((error) => {
    console.error(error);
  process.exit(1);
});
