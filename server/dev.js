const { build } = require("esbuild");
build({
  entryPoints: ["src/index.ts"],
  watch: true,
}).catch(() => {
  process.exit(1);
});
