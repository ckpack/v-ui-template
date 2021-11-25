<template>
  <button :class="`${CSS_PREFIX}button`">
    <slot></slot>
  </button>
</template>

<script>
import { CSS_PREFIX } from '@/defaultConfig';

export default {
  name: 'Button',
  setup() {
    return {
      CSS_PREFIX,
    };
  },
};
</script>

<style src="./button.scss" lang="scss"></style>
