<template>
  <div id="app">
    <k-button @click="handlerClick">Test</k-button>
    <k-label :label="count"></k-label>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ServeDev',
  setup() {
    const count = ref(0);
    return {
      count,
    };
  },
  methods: {
    handlerClick() {
      this.count += 1;
    },
  },
});
</script>
