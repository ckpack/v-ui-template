import path from 'path';
import fs from 'fs';

import glob from 'glob';

import resolve from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import vue from 'rollup-plugin-vue';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

const name = 'VUI';
const globals = {
  // Provide global variable names to replace your external imports, eg. jquery: '$'
  vue: 'Vue',
};
const projectRoot = path.resolve(__dirname, '../src');
const inputJs = glob.sync('src/**/*.js', {
  nodir: true,
}).filter((util) => !/^src\/components\//.test(util));

const components = fs.readdirSync(path.resolve(projectRoot, './components'));
const componentInputs = components.reduce((pre, cur) => {
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
const external = (id) => /^vue/.test(id) || /^@\/utils/.test(id) || /^@\/components/.test(id);

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
    target: 'browser',
    css: false,
    exposeFilename: false,
    preprocessStyles: false,
    cssModulesOptions: {
      generateScopedName: '[local]___[hash:base64:5]',
    },
  }),
};

export default [
  // 除了组件外的js文件
  {
    input: inputJs,
    output: {
      format: 'esm',
      dir: 'libs/',
      entryFileNames: ({ facadeModuleId }) => facadeModuleId.replace(`${projectRoot}/`, ''),
      globals,
      paths,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.resolve,
    ],
    external,
  },
  // 组件
  {
    input: componentInputs,
    output: {
      format: 'esm',
      dir: 'libs/',
      entryFileNames: '[name]/index.js',
      globals,
      paths,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({}),
    ],
    external,
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.js',
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({
        extract: 'index.css',
      }),
    ],
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'esm',
      file: 'dist/index.mixin.js',
      globals,
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({ include: /(?<!&module=.*)\.scss$/ }),
    ],
  },
  {
    input: `${projectRoot}/index.js`,
    output: {
      format: 'iife',
      file: 'dist/index.global.min.js',
      name,
      globals,
      exports: 'named',
    },
    plugins: [
      plugins.replace,
      plugins.alias,
      plugins.vue,
      plugins.resolve,
      postcss({
        minimize: true,
        extract: 'index.global.min.css',
      }),
      terser(),
    ],
  },
];
