import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import compression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    compression() // Add UnoCSS plugin here
  ],
  build: {
    minify: "esbuild", // Faster build
    assetsInlineLimit: 4096, // Optimize small assets
  },
});
