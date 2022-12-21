<template>
  <div class="modal-card">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomModalCard',
});
</script>

<style scoped></style>
