import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  root: "./src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        quality: 80,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        quality: 70,
      },
    }),
  ],
});
