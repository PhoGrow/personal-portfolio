<template>
  <ul class="is-flex is-flex-wrap-wrap is-align-content-space-between h-full">
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AUnorderedList',
});
</script>

<style scoped></style>
