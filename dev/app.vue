yar<template>
  <div id="app">
    <ConfigProvider cls-prefix="v-">
      <PButton></PButton>
      <PLabel></PLabel>
    </ConfigProvider>
  </div>
</template>
<script>
import { ConfigProvider } from '../es';
import PButton from './preview/button.vue';
import PLabel from './preview/label.vue';

export default {
  name: 'ServeDev',
  components: {
    ConfigProvider,
    PButton,
    PLabel,
  },
};
</script>

<style src="../src/styles/index.scss" lang="scss"></style>
