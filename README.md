<h1 align="center">v-ui-template</h1>

<h4 align="center">
  <a href="https://ckpack.github.io/v-ui-template/">中文</a>
  |
  <a href="https://ckpack.github.io/v-ui-template/en/">ENGLISH</a>
</h4>

 You can use this project to quickly create a component library based on vue 3.0. This is a super fast and super simple way to generate a vue component library!

## Features

+ Quickly add new components via commands
+ So components support on-demand loading by default
+ Customizable component prefix to avoid component name and style conflicts
+ Support component library document generation
+ Support generating `CHANGELOG` by default

## Script command

For detailed commands, refer to the `scripts` part of `package.json`

```bash
# Installation dependencies
yarn

# Add new component
yarn gen component-name

# Package your component library
yarn build

# Check the code specification
yarn lint

# Generate log file to release new version
yarn release

# Generate documentation related commands
yarn docs:dev
```

## Example

#### Full introduction

Fully introduce the component library.

```js
import {createApp} from'vue';
import App from'@/App.vue';
import VUI from'v-ui-template';
import 'v-ui-template/dist/index.scss';

const app = createApp(App);

app.use(VUI);
app.mount('#app');
```

#### Load on demand

By default, `tree shaking` is supported, no plug-in is needed. Directly importing `import {Button} from'v-ui-template'` will have the effect of loading on demand.


```html
<script>
  import {Button as VButton} from'v-ui-template';
  export default {
    components: {
      VButton,
    },
  }
</script>

<template>
  <v-button @click="handlerClick">Test</v-button>
</template>
```

#### Browser Directly Introduce

You can also import it directly through the browser's `script`, `style` tags.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-ui-template/dist/index.min.js"></script>
  <style href="https://cdn.jsdelivr.net/npm/v-ui-template/dist/index.css"></style>
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

## Style

#### Globally introduce styles

```js
import 'v-ui-template/dist/index.css';
```

#### Introduce styles on demand

```js
import 'v-ui-template/es/components/button/button.css';
import 'v-ui-template/es/components/label/label.css';
```
