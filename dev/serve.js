import { createApp } from 'vue';

import { components, create } from '../src/v-ui';

import Dev from './serve.vue';

const app = createApp(Dev);

app.use(create({
  components,
}));

app.mount('#app');
