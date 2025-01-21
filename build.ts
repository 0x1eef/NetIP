import { build } from "https://deno.land/x/esbuild/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1";

await build({
  entryPoints: ["src/js/index.tsx"],
  outfile: "build/js/index.js",
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: true,
  minify: true,
  external: ["@types/chrome"],
  plugins: [...denoPlugins()],
});

Deno.exit(0);
