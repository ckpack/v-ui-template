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

We can import components we actually need, making the project smaller than otherwise.

##### Import Directly

```html
<script>
  import { Button, Label } from 'v-ui-template';
  export default {
    components: {
      VButton: Button,
    },
  }
</script>

<template>
  <v-button @click="handlerClick">Test</v-button>
</template>
```

##### Install on Demand Globally 

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Button, Label } from 'v-ui-template';

const app = createApp(App);
app.use(Button);
app.use(Label);
app.mount('#app');
```

Or use the more convenient create like this

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import { Button, Label, create } from 'v-ui-template';

const app = createApp(App);

app.use(create([Button, Label]));
app.mount('#app');
```

Then we can use the component

```html
  <v-button @click="handlerClick">Test</v-button>
```
#### Use in page

import JavaScript and CSS file in your page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <script src="https://unpkg.com/vue@3.2.4/dist/vue.global.prod.js"></script>
  <script src="https://unpkg.com/v-ui-template@1.0.3/dist/index.min.js"></script>
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

#### Options params

We can change the component prefix by options params

```js
app.use(Button, {
  componentPrefix: 'k',
});

// or
app.use(create([Button, Label]), {
  componentPrefix: 'k',
});
```

Then we can use the new component prefix

```html
  <k-button @click="handlerClick">Test</k-button>
```
