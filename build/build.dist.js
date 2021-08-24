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
      plugins.postcss(),
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
      plugins.postcss(),
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
      plugins.postcss({
        minimize: false,
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
      plugins.postcss({
        extract: 'index.min.css',
      }),
      plugins.terser,
    ],
    external,
  },
];
