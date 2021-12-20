<template>
  <slot></slot>
</template>

<script>
import { defineComponent, provide, reactive } from 'vue';
import { configProvideInjectKey, CLS_PREFIX } from '@/defaultConfig';

export default defineComponent({
  name: 'ConfigProvider',
  props: {
    clsPrefix: {
      type: String,
      default: CLS_PREFIX,
    },
  },
  setup(props) {
    provide(configProvideInjectKey, reactive(props));
  },
});
</script>
