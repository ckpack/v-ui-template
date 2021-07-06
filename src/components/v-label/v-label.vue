<template>
  <div class="v-label">
    {{label}}
  </div>
</template>

<script>
export default {
  name: 'v-label',
  props: {
    label: [String, Number],
  },
  setup(props) {
    return {
      text: props.label,
    };
  },
};
</script>

<style lang="scss">
@import '../../styles/var.scss';
.v-label {
  background-color: $red;
}
</style>
