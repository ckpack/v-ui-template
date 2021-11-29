import { createApp } from 'vue';

import { Label } from '../es';
import Dev from './serve.vue';
import '../dist/index.css';

const app = createApp(Dev);

app.use(Label, {
  componentPrefix: 'vv',
});

app.mount('#app');
