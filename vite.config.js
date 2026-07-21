import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        israelInvestments: resolve(__dirname, 'israelInvestments.html'),
        apartments: resolve(__dirname, 'apartments.html'),
        item: resolve(__dirname, 'item.html'),
      },
    },
  },
});