const fs = require('fs');
const path = require('path');

function getCompoents(lang){
  return fs.readdirSync(path.join(__dirname, '../guide/compoents')).filter(compoent => /^[a-zA-Z].+\.md$/.test(compoent)).map((compoent) => {
    const name = compoent.split('.').shift();
    return {
      text: name,
      link: `${lang}/guide/compoents/${name}`,
    }
  });
}

function getGuideSidebar(lang) {
  return [{
      text: 'Base',
      children: [{
        text: 'Install',
        link: `${lang}/guide/base/install`
      }]
    },
    {
      text: 'Compoents',
      children: getCompoents(lang),
    }
  ];
}

function getSidebar(lang = '') {
  return {
    [`${lang}/guide/`]: getGuideSidebar(lang),
    [`${lang}/`]: getGuideSidebar(lang),
  };
}

function getNav(lang = '') {
  return [{
    text: 'Guide',
    link: `${lang}/`,
    activeMatch: `^${lang}/guide`
  }, {
    text: 'About',
    link: `${lang}/about`,
    activeMatch: `^${lang}/about`
  }];
}

module.exports = {
  getSidebar,
  getNav,
}