<template>
  <a :href="href" :target="isExternal ? '_blank' : '_self'">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  href: string;
}>();

const isExternal = computed(() => props.href.startsWith('http'));
</script>

<style>
a {
  font-weight: 500;
}
</style>
