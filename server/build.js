const { build } = require("esbuild");
build({
  entryPoints: ["src/index.ts"],
  platform: "node",
  minify: true,
  bundle: true,
  outfile: "dist/server.js",
  external: ["../node_modules/*", "./node_modules/*"],
})
  .then(console.log)
  .catch(() => {
    process.exit(1);
  });
