<template>
  <div class="columns">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomColumns',
});
</script>

<style scoped></style>
