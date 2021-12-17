import glob from 'glob';
import {
  projectRoot, plugins, output, external,
} from './build.config';

const input = glob.sync('src/**/*.js', {
  nodir: true,
});

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
      plugins.alias,
      plugins.vue,
      plugins.resolve,
    ],
    external: [...external.vue, ...external.dependencies],
  },
];
