import { createApp } from 'vue';

import VUI from '../src';
import Dev from './serve.vue';

const app = createApp(Dev);

app.use(VUI);

app.mount('#app');
