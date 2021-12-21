import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root: './dev',
  resolve: {
    alias: {
      '@': path.join(__dirname, '/src'),
    },
  },
});
