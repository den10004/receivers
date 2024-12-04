import { defineConfig } from "vite";
import php from "vite-plugin-php";

export default defineConfig({
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
  } /*
  plugins: [
    php({
      //  entry: "src/index.php",
      entry: "./sendforms.php",
      server: {
        host: "0.0.0.0",
        port: 3000,
      },
    }),
  ],*/,
});
