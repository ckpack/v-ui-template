<template>
  <div id="app">
    <!-- <VButton @click="handlerClick">Test</VButton> -->
    <v-label :label="count"></v-label>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
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
};
</script>
