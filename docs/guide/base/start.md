# TODO

# 下载

```bash
git clone https://github.com/ckpack/v-ui-template.git
```

# 全局替换 `v-ui-template` -> 'you-project-name' 如 `k-ui`

# 修改组件前缀(可选)

```js
// src/defaultConfig.js
// export const COMPONENT_PREFIX = 'V';
export const COMPONENT_PREFIX = 'K';
```

```scss
// src/styles/__variables.scss
// $cls-prefix: v- !default;
$cls-prefix: k- !default;
```