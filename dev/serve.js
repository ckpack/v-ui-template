import { createApp } from 'vue';
import VUI from '../dist/index';
import '../dist/index.css';

import Dev from './serve.vue';

const app = createApp(Dev);
app.use(VUI);

app.mount('#app');
