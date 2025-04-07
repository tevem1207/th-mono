import { build } from "esbuild";

build({
  entryPoints: ["widget/main-shadow.tsx"],
  outfile: "public/main-shadow.js",
  bundle: true,
  minify: true,
  sourcemap: false,
  format: "iife",
  platform: "browser",
  target: ["es2020"],
  jsx: "automatic",
  plugins: [],
})
  .then(() => {
    console.log("✅ AddChat widget with Tailwind built successfully!");
  })
  .catch((err) => {
    console.error("❌ Build failed:", err);
  });
