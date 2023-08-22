<template>
  <p>
    <span class="has-text-weight-semibold mr-2">{{ text }}</span>
    <slot></slot>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AProperty',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
