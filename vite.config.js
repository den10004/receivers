import { defineConfig } from "vite";

export default defineConfig({
  assetsInclude: ["**/*.ico"],
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./index.html",
        thanks: "./thanks.html",
        privacy: "./privacy.html",
      },
    },
  },
});
