const { build } = require("esbuild");
build({
  entryPoints: ["src/index.ts"],
  pure: ["console.log"],
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
