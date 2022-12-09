<template>
  <figure class="image">
    <slot></slot>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomFigure',
});
</script>

<style scoped></style>
