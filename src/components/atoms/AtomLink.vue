<template>
  <a :href="href" target="_blank" rel="noopener noreferrer">{{ title }}</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
a {
  overflow-wrap: break-word;
}
</style>
