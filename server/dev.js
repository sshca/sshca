const { build } = require("esbuild");
build({
  entryPoints: ["src/index.ts"],
  platform: "node",
  minify: true,
  bundle: true,
  outfile: "dist/server.js",
  external: ["../node_modules/*", "./node_modules/*"],
  watch: true,
}).catch(() => {
  process.exit(1);
});
