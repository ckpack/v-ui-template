import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import { NAME } from '../src/defaultConfig';
import { dependencies } from '../package.json';

const projectRoot = `${path.resolve()}/src`;
const globals = {
  // Provide global variable names to replace your external imports, eg. jquery: '$'
  vue: 'Vue',
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
  resolve: resolve(),
  terser: terser(),
  json: json(),
  vue: vue({
    include: [/\.vue$/i],
    target: 'browser',
    css: false,
    exposeFilename: false,
    preprocessStyles: false,
    // cssModulesOptions: {
    //   generateScopedName: '[name]__[local]___[hash:base64:5]',
    // },
  }),
  commonjs: commonjs(),
};

const output = {
  name: NAME,
  globals,
};

const external = {
  vue: ['vue'],
  dependencies: dependencies ? Object.keys(dependencies) : [],
};

export {
  projectRoot,
  plugins,
  output,
  external,
};
