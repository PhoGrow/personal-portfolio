<template>
  <component :is="tag" class="title">{{ text }}</component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomTitle',
  props: {
    tag: {
      type: String,
      default: 'h1',
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
