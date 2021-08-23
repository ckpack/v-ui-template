import path from 'path';
import fs from 'fs';

import glob from 'glob';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';

const name = 'VUI';
const globals = {
  // Provide global variable names to replace your external imports, eg. jquery: '$'
  vue: 'Vue',
};
const projectRoot = path.resolve(__dirname, '../src');

const inputJs = glob.sync('src/**/*.js', {
  nodir: true,
}).filter((util) => !/^src\/components\//.test(util));

const components = fs.readdirSync(path.resolve(projectRoot, './components')).reduce((pre, cur) => {
  // eslint-disable-next-line no-param-reassign
  pre[cur] = path.resolve(projectRoot, `./components/${cur}`);
  return pre;
}, {});

const paths = (id) => {
  if (/^@\/utils/.test(id)) {
    return id.replace('@/utils', '../utils');
  }
  if (/^@\/components/.test(id)) {
    return id.replace('@/components', '.');
  }
  return id;
};

const plugins = {
  alias: alias({
    entries: [
      {
        find: '@',
        replacement: projectRoot,
      },
    ],
  }),
  replace: replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
  }),
  resolve: resolve(),
  vue: vue({
    include: /\.vue$/,
    target: 'browser',
    css: false,
    exposeFilename: false,
    preprocessStyles: false,
    cssModulesOptions: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
  }),
};

const output = {
  name,
  globals,
  paths,
};

export {
  projectRoot,
  inputJs,
  components,
  plugins,
  output,
};
