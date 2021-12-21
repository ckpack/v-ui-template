import { createApp } from 'vue';

import Dev from './serve.vue';
import TKVUI from '../es';
import '../dist/index.css';

const app = createApp(Dev);

app.use(TKVUI);
// app.use(create([Label, ConfigProvider, Button]), {
//   componentPrefix: 'v',
// });

app.mount('#app');
