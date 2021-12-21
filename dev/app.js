import { createApp } from 'vue';

import Dev from './app.vue';
import VUI from '../src';
import '../src/styles/index.scss';

const app = createApp(Dev);

app.use(VUI, {
  componentPrefix: 'v',
});

app.mount('#app');
