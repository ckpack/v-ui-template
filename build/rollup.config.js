import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const name = 'VUI';
const projectRoot = path.resolve(__dirname, '..');

const plugins = {
  alias: alias({
    entries: [
      {
        find: '@',
        replacement: path.resolve(projectRoot, 'src'),
      },
    ],
  }),
  replace: replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
  }),
  resolve: resolve(),
  vue: vue({
    target: 'browser',
    css: false,
    exposeFilename: false,
    preprocessStyles: false,
    cssModulesOptions: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
  }),
};

const external = ['vue'];
const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
};

export default [
  {
    input: path.resolve(__dirname, '../src/v-ui'),
    output: {
      format: 'esm',
      file: 'dist/index.js',
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({
        // 提取css到单独的文件
        extract: 'index.css',
      }),
    ],
    external,
  },
  {
    input: path.resolve(__dirname, '../src/v-ui'),
    output: {
      format: 'esm',
      file: 'dist/index.mixin.js',
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({ include: /(?<!&module=.*)\.scss$/ }),
    ],
  },
  {
    input: path.resolve(__dirname, '../src/v-ui/global.js'),
    output: {
      format: 'iife',
      file: 'dist/index.global.min.js',
      name,
      globals,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({
        minimize: true,
        extract: 'index.global.min.css',
      }),
      terser(),
    ],
    external,
  },
];
