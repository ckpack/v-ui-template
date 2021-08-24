import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';

const name = 'VUI';
const projectRoot = path.resolve(__dirname, '../src');

const globals = {
  // Provide global variable names to replace your external imports, eg. jquery: '$'
  vue: 'Vue',
};

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
  terser: terser(),
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
  plugins,
  output,
};
