<template>
  <div id="app">
    <ConfigProvider cls-prefix="v-">
      <!-- button -->
      <VButton>Test</VButton>
      <!-- label -->
      <VLabel label="Hello Wrold"></VLabel>
    </ConfigProvider>
  </div>
</template>
<script>
import { ConfigProvider, Button, Label } from '../src';

export default {
  name: 'App',
  components: {
    ConfigProvider,
    VButton: Button,
    VLabel: Label,
  },
};
</script>
