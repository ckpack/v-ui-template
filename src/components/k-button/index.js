import KButton from './k-button.vue';

KButton.install = (app) => {
  app.component(KButton.name, KButton);
};

export default KButton;
