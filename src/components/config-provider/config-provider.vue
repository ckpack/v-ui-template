<template>
  <slot></slot>
</template>

<script>
import { defineComponent, provide } from 'vue';
import { configProvideInjectKey, CSS_PREFIX } from '@/defaultConfig';

export default defineComponent({
  name: 'ConfigProvider',
  props: {
    cssPrefix: {
      type: String,
      default: CSS_PREFIX,
    },
  },
  setup(props) {
    provide(configProvideInjectKey, props);
  },
});
</script>
