import path from "path";
import { fileURLToPath } from "url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "widget/main-shadow.tsx"),
      },
      output: {
        entryFileNames: () => {
          return "widget/[name].js";
        },
      },
    },
    minify: "terser",
    outDir: "public",
    emptyOutDir: true,
  },
});
