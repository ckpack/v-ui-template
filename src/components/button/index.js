import Button from './button.vue';
import { prefix } from '@/defaultConfig';

Button.install = (app, {
  componentPrefix = prefix,
} = {}) => {
  app.component(`${componentPrefix.toUpperCase()}${Button.name}`, Button);
};

export default Button;
