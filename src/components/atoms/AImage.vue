<template>
  <img
    :src="src"
    :alt="alt"
    :loading="isLazyLoaded ? 'lazy' : 'eager'"
    :class="{ 'is-rounded': isRounded }"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  src: string;
  alt: string;
  isLazyLoaded?: boolean;
  isRounded?: boolean;
  isInverted?: boolean;
}>();

const invert = computed(() => (props.isInverted ? 1 : 0));
</script>

<style scoped>
img {
  filter: invert(v-bind(invert));
}

html.dark img {
  filter: invert(v-bind(invert)) brightness(0.8) contrast(1.2)
    drop-shadow(0px 0px 0px #ffffff);
}
</style>
