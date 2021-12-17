<template>
  <button :class="`${P}button`">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';
import { CSS_PREFIX as P } from '@/defaultConfig';

export default defineComponent({
  name: 'Button',
  setup() {
    return {
      P,
    };
  },
});
</script>
