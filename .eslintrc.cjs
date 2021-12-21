module.exports = {
  extends: ['plugin:vue/vue3-essential', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: ['**/build/*', '**/dev/*', 'vite.config.js'],
    }],
    'vue/multi-word-component-names': 0,
    'max-len': ['error', {
      code: 2000,
    }],
    'no-console': 0,
    'no-param-reassign': 0,
  },
  overrides: [{
    files: ['*.js', '.json', '*.vue'],
  }],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
      extensions: ['.js', '.scss', '.json', '.vue'],
    },
  },
};
