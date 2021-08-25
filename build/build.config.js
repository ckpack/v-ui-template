import path from 'path';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import prefixer from 'postcss-prefixer';

import { name, cssPrefix } from '../src/defaultConfig';

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
      prefix: cssPrefix,
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
  replace: replace({
    'process.env.NODE_ENV': '\'production\'',
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
  postcss: postcssPlugin,
};

const output = {
  name,
  globals,
};

const external = ['vue'];

export {
  projectRoot,
  plugins,
  output,
  external,
};
