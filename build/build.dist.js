import {
  projectRoot, plugins, output, external,
} from './build.config';

const input = `${projectRoot}/index.js`;

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
  plugins.commonjs,
];

const baseExternal = external.vue;

export default [
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
    ],
    external: baseExternal,
  },
  {
    input,
    output: {
      format: 'iife',
      file: 'dist/index.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.terser,
    ],
    external: baseExternal,
  },
  {
    input,
    output: {
      format: 'esm',
      file: 'dist/index.sep.js',
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
    ],
    external: baseExternal,
  },
  {
    input,
    output: {
      format: 'iife',
      file: 'dist/index.sep.min.js',
      exports: 'named',
      name: output.name,
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.terser,
    ],
    external: baseExternal,
  },
];
