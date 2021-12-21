<template>
  <div id="app">
    <ConfigProvider cls-prefix="v-">
      <PVButton></PVButton>
      <PVLabel></PVLabel>
    </ConfigProvider>
  </div>
</template>
<script>
import { ConfigProvider } from '../es';
import PVButton from './preview/v-button.vue';
import PVLabel from './preview/v-label.vue';

export default {
  name: 'ServeDev',
  components: {
    ConfigProvider,
    PVButton,
    PVLabel,
  },
};
</script>

<style src="../src/styles/index.scss" lang="scss"></style>
