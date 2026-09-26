import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import fs from 'fs'
import path from 'path'

// Vite plugin to generate dist/glimpses/index.html upon build
// This guarantees static hosting platforms (like Vercel) never return 404 when
// resolving /glimpses as a static directory.
function spaRoutesPlugin(): Plugin {
  return {
    name: 'spa-routes-fallback',
    closeBundle() {
      const distDir = path.resolve(process.cwd(), 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        const glimpsesDir = path.join(distDir, 'glimpses');
        if (!fs.existsSync(glimpsesDir)) {
          fs.mkdirSync(glimpsesDir, { recursive: true });
        }
        fs.copyFileSync(indexPath, path.join(glimpsesDir, 'index.html'));
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutesPlugin()],
  build: {
    chunkSizeWarningLimit: 1800,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
            return 'vendor-three';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
        },
      },
    },
  },
})

