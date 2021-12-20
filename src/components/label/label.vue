<template>
  <div :class="prefix">
    {{label}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { getClsPrefix } from '@/defaultConfig';

export default defineComponent({
  name: 'Label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    const prefix = getClsPrefix('button');
    return {
      prefix,
      text: props.label,
    };
  },
});
</script>
