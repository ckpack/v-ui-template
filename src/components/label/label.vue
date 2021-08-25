<template>
  <div :class="`${cssPrefix}label`">
    {{label}}
  </div>
</template>

<script>
import { cssPrefix } from '../../defaultConfig';

export default {
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    return {
      cssPrefix,
      text: props.label,
    };
  },
};
</script>

<style lang="scss">
@import './label.scss';
</style>
