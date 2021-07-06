import { createApp } from 'vue';

import { VButton, create } from '../src/v-ui';
// import { VButton, create } from '../dist/index';
// import '../dist/index.css';

import Dev from './serve.vue';

const app = createApp(Dev);

app.use(create({
  components: [VButton],
}));

app.mount('#app');
