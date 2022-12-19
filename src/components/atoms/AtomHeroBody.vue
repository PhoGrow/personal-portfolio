<template>
  <div class="hero-body">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomHeroBody',
});
</script>

<style scoped></style>
