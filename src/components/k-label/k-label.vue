<template>
  <div class="k-label">
    {{label}}
  </div>
</template>

<script>
export default {
  name: 'k-label',
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
.k-label {
  background-color: $red;
}
</style>
