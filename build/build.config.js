import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import prefixer from 'postcss-prefixer';

import { NAME, CSS_PREFIX } from '../src/defaultConfig';
import { dependencies } from '../package.json';

const projectRoot = path.resolve(__dirname, '../src');
const globals = {
  // Provide global variable names to replace your external imports, eg. jquery: '$'
  vue: 'Vue',
};

const postcssPlugin = (options = {}) => {
  const minimize = options.minimize !== false;
  const exclude = options.exclude || /node_modules/;
  const include = options.include || /(?<!&module=.*)\.scss$/;
  return postcss({
    minimize,
    plugins: [prefixer({
      prefix: CSS_PREFIX,
    })],
    exclude,
    include,
    extract: options.extract,
  });
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
  vue: vue({
    include: [/\.vue$/i],
    target: 'browser',
    css: false,
    exposeFilename: false,
    preprocessStyles: false,
    cssModulesOptions: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  }),
  postcss: postcssPlugin,
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
