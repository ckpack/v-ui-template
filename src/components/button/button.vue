<template>
  <button :class="`${CSS_PREFIX}button`">
    <slot></slot>
  </button>
</template>

<script setup>
import { CSS_PREFIX } from '@/defaultConfig';
</script>

<style src="./button.scss" lang="scss"></style>
