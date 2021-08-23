import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

import {
  projectRoot, plugins, output,
} from './build.config';

const external = ['vue'];

export default [
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({
        extract: 'index.css',
      }),
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.mixin.js',
      globals: output.globals,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({ include: /(?<!&module=.*)\.scss$/ }),
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'iife',
      file: 'dist/index.global.min.js',
      name: output.name,
      globals: output.globals,
      exports: 'named',
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
