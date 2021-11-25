import { createApp } from 'vue';

import VUI from '../es';
import Dev from './serve.vue';
import '../dist/index.css';

const app = createApp(Dev);

app.use(VUI, {
  componentPrefix: 'v',
});

app.mount('#app');
