<template>
  <div class="navbar-item">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomNavbarItem',
});
</script>

<style scoped></style>
