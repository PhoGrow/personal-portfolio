<template>
  <h2 class="subtitle">
    <slot></slot>
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomSubtitle',
});
</script>

<style scoped></style>
