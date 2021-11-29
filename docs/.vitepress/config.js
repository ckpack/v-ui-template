const bar = require('./bar');
const package = require('../../package.json');

module.exports = {
  title: package.name,
  description: package.description,
  base: `/${package.name}/`,
  themeConfig: {
    repo: package.repository,
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    ...bar,
  }
};