import { createApp } from 'vue';

import Dev from './serve.vue';
import '../dist/index.css';

const app = createApp(Dev);

// app.use(create([Label, ConfigProvider, Button]), {
//   componentPrefix: 'v',
// });

app.mount('#app');
