import VButton from '@/components/v-button';
import VLabel from '@/components/v-label';

const components = [VButton, VLabel];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  install as default,
  VButton,
  VLabel,
};
