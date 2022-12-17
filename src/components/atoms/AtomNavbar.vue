<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container border-bottom">
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

<style scoped>
.border-bottom {
  border-bottom: 1px solid #943100;
}
</style>
