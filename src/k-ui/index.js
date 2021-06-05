import KButton from '@/components/k-button';
import KLabel from '@/components/k-label';

const components = [KButton, KLabel];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export {
  KButton,
  KLabel,
};
export default {
  install,
};
