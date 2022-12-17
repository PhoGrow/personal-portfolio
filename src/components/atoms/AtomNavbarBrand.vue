<template>
  <div class="navbar-brand">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomNavbarBrand',
});
</script>

<style scoped>
.navbar-brand {
  flex-grow: 1;
  justify-content: space-between;
}
</style>
