import fs from 'fs';
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
    preprocessStyles: true,
    cssModulesOptions: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
  }),
  postcss: postcss({
    // 提取css到单独的文件
    extract: 'index.css',
  }),
  terser: terser(),
};

const external = ['vue'];

const components = fs.readdirSync(path.resolve(__dirname, '../src/components')).filter((componentName) => /^k-.+/.test(componentName));

export default [
  ...components.map((componentName) => ({
    input: path.resolve(__dirname, `../src/components/${componentName}`),
    output: {
      format: 'esm',
      file: `dist/${componentName}/index.js`,
    },
    plugins: [
      plugins.alias,
      plugins.replace,
      plugins.resolve,
      plugins.vue,
      postcss({
        extract: path.resolve(`dist/${componentName}/index.css`),
      }),
    ],
    external,
  })),
  {
    input: path.resolve(__dirname, '../src/k-ui'),
    output: {
      format: 'esm',
      file: 'dist/index.js',
    },
    plugins: [
      plugins.alias,
      plugins.replace,
      plugins.resolve,
      plugins.vue,
      plugins.postcss,
    ],
    external,
  },
  {
    input: path.resolve(__dirname, '../src/k-ui'),
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      name,
    },
    plugins: [
      plugins.alias,
      plugins.replace,
      plugins.resolve,
      plugins.vue,
      postcss({
        minimize: true,
        extract: 'index.min.css',
      }),
      plugins.terser,
    ],
    external,
  },
];
