import fs from 'fs';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';

const { dependencies } = JSON.parse(fs.readFileSync('./package.json'));
const external = ['vue', ...Object.keys(dependencies || [])];
const outDir = 'es';
const preserveModulesRoot = 'src';

export default build({
  plugins: [vue()],
  build: {
    target: 'esnext',
    outDir,
    emptyOutDir: true,
    minify: false,
    brotliSize: false,
    rollupOptions: {
      input: './src',
      output: {
        entryFileNames: '[name].js',
        preserveModules: true,
        preserveModulesRoot,
      },
      external,
    },
    lib: {
      formats: ['es'],
    },
  },
});
