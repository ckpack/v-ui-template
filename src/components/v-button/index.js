import VButton from './v-button.vue';

VButton.install = (app) => {
  app.component(VButton.name, VButton);
};

export default VButton;
