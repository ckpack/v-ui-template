import postcss from 'rollup-plugin-postcss';

import {
  projectRoot, plugins, output,
} from './build.config';

const external = ['vue'];

const basePlugins = [
  plugins.replace,
  plugins.alias,
  plugins.vue,
  plugins.resolve,
];
const postcssPlugin = postcss({
  exclude: /node_modules/,
  include: /(?<!&module=.*)\.scss$/,
});

export default [
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      postcssPlugin,
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      name: output.name,
      globals: output.globals,
      exports: 'named',
    },
    plugins: [
      ...basePlugins,
      postcssPlugin,
      plugins.terser,
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.sep.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      postcss({
        exclude: /node_modules/,
        extract: 'index.css',
      }),
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'iife',
      file: 'dist/index.sep.min.js',
      name: output.name,
      globals: output.globals,
      exports: 'named',
    },
    plugins: [
      ...basePlugins,
      postcss({
        exclude: /node_modules/,
        minimize: true,
        extract: 'index.min.css',
      }),
      plugins.terser,
    ],
    external,
  },
];
