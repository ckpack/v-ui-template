<template>
  <button :class="`${cssPrefix}button`">
    <slot></slot>
  </button>
</template>

<script>
import { cssPrefix } from '@/defaultConfig';

export default {
  name: 'Button',
  setup() {
    return {
      cssPrefix,
    };
  },
};
</script>

<style lang="scss">
@import './button.scss';
</style>
