const { build } = require("esbuild");
build({
  entryPoints: ["src/index.ts"],
  platform: "node",
  minify: true,
  bundle: true,
  outfile: "dist/server.js",
  external: [
    "apollo-server-express",
    "jsonwebtoken",
    "bcrypt",
    "sshpk",
    "graphql-tag",
    "express",
    "dotenv-safe",
    "cookie-parser",
    "@prisma/client",
  ],
})
  .then(console.log)
  .catch(() => {
    process.exit(1);
  });
