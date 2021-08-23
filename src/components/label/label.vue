<template>
  <div :class="`${prefix}-label`">
    {{label}}
  </div>
</template>

<script>
import { add, mul } from '@/utils';

console.log(add);
console.log(mul);

export default {
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    return {
      text: props.label,
    };
  },
  data() {
    return {
      prefix: this.$VUI.prefix,
    };
  },
};
</script>

<style lang="scss">
@import '../../styles/var.scss';
.v-label {
  background-color: $red;
}
</style>
