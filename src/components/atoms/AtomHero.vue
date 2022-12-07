<template>
  <section class="hero">
    <div class="hero-body">
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
});
</script>

<style scoped></style>
