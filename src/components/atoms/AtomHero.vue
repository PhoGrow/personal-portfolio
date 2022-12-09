<template>
  <section class="hero">
    <div :class="['hero-body', { 'px-0': !hasHorizontalPadding }]">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomHero',
  props: {
    hasHorizontalPadding: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
