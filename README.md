# v-ui-template

 你可以使用该项目快速创建基于vue 3.0的组件库。 这是生成 vue 组件库的超快、超简单的方式！

# 功能特点

+ 通过命令快速添加新组件
+ 所以组件默认支持按需加载
+ 可自定义组件前缀，避免组件名称、样式冲突
+ 支持组件库文档生成
+ 默认支持生成`CHANGELOG`
# 脚本命令

详细命令参考`package.json`的`scripts`部分

```bash
# 安装依赖
yarn

# 添加新组件
yarn gen component-name

# 打包你的组件库
yarn build

# 检查代码规范
yarn lint

# 生成日志文件发布新版本
yarn release

# 生成文档相关命令
yarn docs:dev
```

# 用例

#### 完整引入

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

#### 按需加载

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

##### 浏览器直接引入

你也可以直接通过浏览器的`script`, `style`标签导入。

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

# 样式
## 全局引入样式

```js
import 'v-ui-template/dist/index.css';
```

## 按需引入样式

```js
import 'v-ui-template/es/components/button/button.css';
import 'v-ui-template/es/components/label/label.css';
```