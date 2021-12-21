<template>
  <div id="app">
    <ConfigProvider cls-prefix="v-">
      <ButtonWrap></ButtonWrap>
      <LabelWrap></LabelWrap>
    </ConfigProvider>
  </div>
</template>
<script>
import { ConfigProvider } from '../es';
import ButtonWrap from './compoents/button-wrap.vue';
import LabelWrap from './compoents/label-wrap.vue';

export default {
  name: 'ServeDev',
  components: {
    ConfigProvider,
    ButtonWrap,
    LabelWrap,
  },
};
</script>

<style src="../src/styles/index.scss" lang="scss"></style>
