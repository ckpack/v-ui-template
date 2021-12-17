import { createApp } from 'vue';

import { Label, Button, create } from '../es';
import Dev from './serve.vue';
import '../dist/index.css';

const app = createApp(Dev);

app.use(create([Label, Button]), {
  componentPrefix: 'v',
});

app.mount('#app');
