<template>
  <section class="hero is-fullheight">
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
  name: 'FullheightHero',
});
</script>

<style scoped></style>
