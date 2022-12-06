<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomTitle',
});
</script>

<style scoped></style>
