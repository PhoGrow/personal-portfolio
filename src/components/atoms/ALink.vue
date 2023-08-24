<template>
  <a :href="href" :target="isExternal ? '_blank' : '_self'">
    <template v-if="title">{{ title }}</template>
    <slot v-else></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export interface Link {
  href: string;
  title?: string;
}

export default defineComponent({
  name: 'ALink',
  props: {
    href: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    isExternal(): boolean {
      return this.href.startsWith('http');
    },
  },
});
</script>

<style scoped>
a {
  overflow-wrap: break-word;
}
</style>
