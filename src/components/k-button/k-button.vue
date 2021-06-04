<template>
  <button class="k-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'k-button',
};
</script>

<style lang="scss">
@import '../../styles/var.scss';
.k-button {
  background-color: $red;
}
</style>
