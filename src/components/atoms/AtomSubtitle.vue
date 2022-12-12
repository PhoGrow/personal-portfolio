<template>
  <component :is="tag" class="subtitle">{{ text }}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomSubtitle',
  props: {
    tag: {
      type: String,
      default: 'h2',
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
