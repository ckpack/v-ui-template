<template>
  <div :class="`${P}label`">
    {{label}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { CSS_PREFIX as P } from '@/defaultConfig';

export default defineComponent({
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    return {
      P,
      text: props.label,
    };
  },
});
</script>
