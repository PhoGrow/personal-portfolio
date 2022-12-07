<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomColumn',
});
</script>

<style scoped></style>
