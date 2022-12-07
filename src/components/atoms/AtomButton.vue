<template>
  <o-button tag="a" :href="href" size="medium" rounded>
    <slot></slot>
  </o-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonItem',
  props: {
    href: {
      type: String,
      default: '#',
    },
  },
});
</script>

<style scoped></style>
