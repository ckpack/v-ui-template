import { createApp } from 'vue';

// import VUI from '../libs';
// import VUI from '../dist';
import { Button, create } from '../libs';
// import '../dist/index.css';

import Dev from './serve.vue';

const app = createApp(Dev);

// app.use(VUI);
// app.use(create({
//   components,
//   componentPrefix: 'v',
// }));
app.use(create({
  components: [Button],
  componentPrefix: 'v',
}));

app.mount('#app');
