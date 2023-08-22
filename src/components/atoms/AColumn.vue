<template>
  <div class="column">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AColumn',
});
</script>

<style scoped></style>
