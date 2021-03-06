## 完整引入

完整引入组件库。

```js
import { createApp } from 'vue';
import App from '@/App.vue';
import VUI from 'v-ui-template';
import 'v-ui-template/dist/index.scss';

const app = createApp(App);

app.use(VUI);
app.mount('#app');
```

## 按需加载

默认支持`tree shaking`，无需任何插件，直接引入 `import { Button } from 'v-ui-template'` 就会有按需加载的效果。


```html
<script>
  import { Button as VButton } from 'v-ui-template';
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

## 浏览器直接引入

你也可以直接通过浏览器的`script`, `style`标签导入。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>VUI</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-ui-template/dist/index.css">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/v-ui-template/dist/index.min.js"></script>
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

## 样式
#### 全局引入样式

```js
import 'v-ui-template/dist/index.css';
```

#### 按需引入样式

```js
import 'v-ui-template/es/components/button/index.css';
import 'v-ui-template/es/components/label/index.css';
```
