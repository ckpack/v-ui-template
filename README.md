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
import VUI from 'v-ui-template';
import 'v-ui-template/dist/index.css';

import App from './App.vue';

const app = createApp(App);
app.use(VUI);
app.mount('#app');
```

#### On demand

we can import components we actually need, making the project smaller than otherwise.

```js
import { createApp } from 'vue';
import KButton from 'v-ui-template/libs/v-button';
import 'v-ui-template/libs/v-button/index.css';

import App from './App.vue';

const app = createApp(App);
app.use(KButton);
app.mount('#app');
```

#### Use in page

import JavaScript and CSS file in your page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>vue-color</title>
  <script src="https://unpkg.com/vue@next"></script>
  <script src="https://unpkg.com/v-ui-template@0.0.8/dist/index.global.min.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/v-ui-template@0.0.8/dist/index.global.min.css">
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