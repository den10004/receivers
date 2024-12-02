export default {
  root: "./src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: "./src/index.html",
        thanks: "./src/thanks.html",
        privacy: "./src/privacy.html",
      },
    },
  },
  appType: "mpa",
  root: "./src",
};
