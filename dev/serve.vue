<template>
  <ConfigProvider cls-prefix="v-">
    <div id="app">
      <PVButton></PVButton>
      <PVLabel></PVLabel>
    </div>
  </ConfigProvider>
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
