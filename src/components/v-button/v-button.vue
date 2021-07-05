<template>
  <button class="v-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'v-button',
};
</script>

<style>
/* @import '../../styles/var.scss'; */
.v-button {
  background-color: red;
}
</style>
