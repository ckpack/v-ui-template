const { getNav, getSidebar } = require('./bar');
const { name, description, repository } = require('../../package.json');

module.exports = {
  title: name,
  description: description,
  base: `/${name}/`,
  locales: {
    '/': { lang: 'zh-CN' },
    '/en/': { lang: 'en-US' },
  },
  themeConfig: {
    repo: repository,
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    locales: {
      '/': {
        label: '中文',
        nav: getNav(),
        sidebar: getSidebar(),
      },
      '/en/': {
        label: 'English',
        nav: getNav('/en'),
        sidebar: getSidebar('/en'),
      },
    },
  }
};