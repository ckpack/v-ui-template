import glob from 'glob';
import { projectRoot, plugins, output } from './build.config';

const input = glob.sync('src/**/*.js', {
  nodir: true,
});
const external = (id) => /^vue/.test(id) || /^@\/utils/.test(id) || /^@\/components/.test(id);

const basePlugins = [
  plugins.replace,
  plugins.alias,
  plugins.vue,
  plugins.resolve,
];

export default [
  {
    input,
    output: {
      format: 'esm',
      dir: 'libs/',
      entryFileNames: ({ facadeModuleId }) => facadeModuleId.replace(`${projectRoot}/`, ''),
      globals: output.globals,
      paths: output.paths,
    },
    plugins: [
      ...basePlugins,
      plugins.postcss(),
    ],
    external,
  },
];
