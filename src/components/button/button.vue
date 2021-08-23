<template>
  <button :class="`${prefix}-button`">
    <slot></slot>
  </button>
</template>

<script>
import { add } from '@/utils';

console.log(add);

export default {
  name: 'Button',
  data() {
    return {
      prefix: this.$VUI.prefix,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/var.scss';

.v-button {
  background-color: $red;
}
</style>
