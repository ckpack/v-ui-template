import KButton from '@/components/k-button';
import KLabel from '@/components/k-label';

export const components = [KButton, KLabel];

const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export default {
  install,
};
