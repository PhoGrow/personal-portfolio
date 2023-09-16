<template>
  <span
    :class="[
      `tag is-rounded is-${size} is-${variant || (isDark ? 'dark' : 'white')}`,
      { 'has-text-weight-medium': size === 'large' },
    ]"
  >
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'ATag',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator(size: string) {
        return ['normal', 'medium', 'large'].includes(size);
      },
    },
    variant: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
