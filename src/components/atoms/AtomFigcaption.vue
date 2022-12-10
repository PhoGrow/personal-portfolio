<template>
  <figcaption class="has-text-centered is-size-5 has-text-weight-medium mt-2">
    <slot></slot>
  </figcaption>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomFigcaption',
});
</script>

<style scoped>
figcaption {
  position: absolute;
  width: 100%;
}
</style>
