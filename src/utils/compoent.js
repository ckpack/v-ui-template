import { getComponentPrefix } from '@/defaultConfig';

// eslint-disable-next-line func-names
export const install = function (app, options) {
  const componentPrefix = getComponentPrefix(options);
  app.component(`${componentPrefix}${this.name}`, this);
};
