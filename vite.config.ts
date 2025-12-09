import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },

  // Optimizaciones para Firebase
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/storage',
      'firebase/functions'
    ],
    exclude: []
  },

  // Configuración de build
  // build: {
  //   commonjsOptions: {
  //     transformMixedEsModules: true
  //   },
  //   rollupOptions: {
  //     external: []
  //   }
  // },

  // Resolución de módulos
  resolve: {
    alias: {
      // Si tienes alias personalizados
    }
  }
});
