const fs = require('fs');
const path = require('path');

const compoents = fs.readdirSync(path.join(__dirname, '../guide/compoents')).filter(compoent => /^[a-zA-Z].+\.md$/.test(compoent)).map((compoent) => {
  const name = compoent.split('.').shift();
  return {
    text: `${name[0].toUpperCase()}${name.slice(1)}`,
    link: `/guide/compoents/${name}`,
  }
});

function getGuideSidebar() {
  return [{
      text: 'Base',
      children: [{
        text: 'Install',
        link: '/guide/base/install'
      }]
    },
    {
      text: 'Compoents',
      children: compoents,
    }
  ];
}

function getSidebar() {
  return {
    '/guide/': getGuideSidebar(),
    '/': getGuideSidebar(),
  };
}

function getNav() {
  return [{
    text: 'Guide',
    link: '/',
    activeMatch: '^/$|^/guide/'
  }, {
    text: 'About',
    link: '/about',
    activeMatch: '^/about'
  }];
}

module.exports = {
  sidebar: getSidebar(),
  nav: getNav(),
}