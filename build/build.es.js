import glob from 'glob';
import {
  projectRoot, plugins, output, external,
} from './build.config';

const input = glob.sync('src/**/*.js', {
  nodir: true,
});

const basePlugins = [
  plugins.alias,
  plugins.vue,
  plugins.resolve,
  plugins.commonjs,
];

export default [
  {
    input,
    output: {
      format: 'esm',
      dir: 'es/',
      entryFileNames: ({ facadeModuleId }) => facadeModuleId.replace(`${projectRoot}/`, ''),
      globals: output.globals,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
    ],
    external,
  },
];