<template>
  <div class="hero-head">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomHeroHead',
});
</script>

<style scoped></style>
