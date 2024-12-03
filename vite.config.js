export default {
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./index.html",
        thanks: "./thanks.html",
        privacy: "./privacy.html",
      },
    },
  },
};
