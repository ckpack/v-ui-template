<template>
  <div :class="`${CSS_PREFIX}label`">
    {{label}}
  </div>
</template>

<script>
import { CSS_PREFIX } from '../../defaultConfig';

export default {
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    return {
      CSS_PREFIX,
      text: props.label,
    };
  },
};
</script>

<style src="./label.scss" lang="scss"></style>
