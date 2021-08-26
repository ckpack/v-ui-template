import Label from './label.vue';
import { prefix } from '@/defaultConfig';

Label.install = (app, {
  componentPrefix = prefix,
} = {}) => {
  app.component(`${componentPrefix.toUpperCase()}${Label.name}`, Label);
};

export default Label;
