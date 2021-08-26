import { createApp } from 'vue';

import VUI from '../libs';

import Dev from './serve.vue';

const app = createApp(Dev);

app.use(VUI);

app.mount('#app');
