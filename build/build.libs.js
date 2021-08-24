// import fs from 'fs';
// import path from 'path';

import glob from 'glob';

import { projectRoot, plugins, output } from './build.config';

const inputJs = glob.sync('src/**/*.js', {
  nodir: true,
});
// .filter((util) => !/^src\/components\//.test(util));

// const components = fs.readdirSync(path.resolve(projectRoot, './components')).reduce((pre, cur) => {
//   // eslint-disable-next-line no-param-reassign
//   pre[cur] = path.resolve(projectRoot, `./components/${cur}`);
//   return pre;
// }, {});

const external = (id) => /^vue/.test(id) || /^@\/utils/.test(id) || /^@\/components/.test(id);

const basePlugins = [
  plugins.replace,
  plugins.alias,
  plugins.vue,
  plugins.resolve,
];

export default [
  // 除了组件外的js文件
  {
    input: inputJs,
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
  // // 组件
  // {
  //   input: components,
  //   output: {
  //     format: 'esm',
  //     dir: 'libs/',
  //     entryFileNames: '[name]/index.js',
  //     globals: output.globals,
  //     paths: output.paths,
  //   },
  //   plugins: [
  //     ...basePlugins,
  //     plugins.postcss(),
  //   ],
  //   external,
  // },
];
