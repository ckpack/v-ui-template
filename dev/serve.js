import { createApp } from 'vue';

import VUI from '../libs';
// import VUI from '../dist';
// import { components, create } from '../dist';
// import '../dist/index.css';

import Dev from './serve.vue';

const app = createApp(Dev);

app.use(VUI);
// app.use(create({
//   components,
//   componentPrefix: 'v',
// }));

app.mount('#app');
