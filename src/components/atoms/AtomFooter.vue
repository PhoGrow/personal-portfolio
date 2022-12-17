<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomFooter',
});
</script>

<style scoped></style>
