<template>
  <a :href="href" :target="isExternal ? '_blank' : '_self'">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ALink',
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternal(): boolean {
      return this.href.startsWith('http');
    },
  },
});
</script>

<style>
a {
  font-weight: 500;
}
</style>
