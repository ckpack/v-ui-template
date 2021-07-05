import { createApp } from 'vue';

import { components, create } from '../dist';
// import '../dist/index.css';

import Dev from './serve.vue';

const app = createApp(Dev);

app.use(create({
  components,
}));

app.mount('#app');
