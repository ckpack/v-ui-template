# v-ui-template

 Quickly create templates for vue 3.0 SFC (single-file-components). It's the fastest way to produce npm-ready vue components!

# Scripts

#### Install dependencies 

```
yarn
```

#### Generate new component

```
yarn gen component-name
```

### Packaging your SFC

```
yarn build
```


# Use case

#### Fully import

imports components entirely. Note that CSS file needs to be imported separately.

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import VUI from 'v-ui-template';

const app = createApp(App);

app.use(VUI);
app.mount('#app');
```

#### On demand

we can import components we actually need, making the project smaller than otherwise.

##### for vite or vue-cli

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Button, create } from 'v-ui-template';

const app = createApp(App);

app.use(create({
  components: [Button],
}));
app.mount('#app');
```

#### Use in page

import JavaScript and CSS file in your page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <script src="https://unpkg.com/vue@3.2.4/dist/vue.global.prod.js"></script>
  <script src="https://unpkg.com/v-ui-template@1.0.2/dist/index.min.js"></script>
</head>
<body>
  <div id="app">
    <v-button @click="handlerClick">Test</v-button>
    <v-label :label="count"></v-label>
  </div>
</body>
<script>
  const app = Vue.createApp({
    data() {
      return {
        count: 0,
      };
    },
    methods: {
      handlerClick() {
        this.count += 1;
      },
    },
  });
  app.use(VUI);
  app.mount('#app')
</script>
</html>
```