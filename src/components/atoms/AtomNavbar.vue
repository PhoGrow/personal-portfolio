<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container has-border-bottom">
      <slot></slot>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomNavbar',
});
</script>

<style scoped></style>
