import process from "node:process";
import path from "node:path";
import { build } from "https://deno.land/x/esbuild/mod.js";
import { denoPlugins } from "jsr:@luca/esbuild-deno-loader@^0.11.1";

function getTargetDir() {
  if (process.env.targetdir) {
    return process.env.targetdir;
  } else {
    return path.resolve(process.cwd(), "build");
  }
}

await build({
  entryPoints: ["src/js/index.tsx"],
  outfile: path.resolve(getTargetDir(), "js/index.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  sourcemap: true,
  minify: false,
  external: [],
  plugins: [...denoPlugins()],
});

Deno.exit(0);
