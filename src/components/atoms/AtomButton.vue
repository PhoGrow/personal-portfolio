<template>
  <o-button
    :tag="tag"
    :href="tag === 'a' ? href : null"
    :size="size"
    :rounded="rounded"
  >
    <slot></slot>
  </o-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonItem',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    size: {
      type: String,
      default: 'medium',
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
