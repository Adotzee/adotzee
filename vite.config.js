import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import compression from "vite-plugin-compression";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    UnoCSS(),
    compression(),
        VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'icons/icon-192x192.png', 'icons/icon-512x512.png'],
      manifest: {
        name: 'Adotzee - Best Degree Admission Platform',
        short_name: 'Adotzee',
        description: 'Get admission to the best degree colleges in Bangalore. Join the Adotzee community!',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }

    }) // Add UnoCSS plugin here
  ],
  build: {
    minify: "esbuild", // Faster build
    assetsInlineLimit: 4096, // Optimize small assets
  },
});
