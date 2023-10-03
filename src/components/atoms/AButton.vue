<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href || null"
    :class="[
      `button is-${size}`,
      variant ? `is-${variant}` : '',
      {
        'is-dark': isMounted && isDark && !variant,
        'is-rounded': isRounded,
        'has-background-transparent has-border-color-transparent':
          isTransparent,
        'is-pulled-right': isPulledRight,
      },
    ]"
    :style="isSquare ? 'aspect-ratio: 1' : ''"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '@stores';
import { useMounted } from '@vueuse/core';

export default defineComponent({
  name: 'AButton',
  props: {
    href: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
      validator(size: string) {
        return ['small', 'normal', 'medium', 'large'].includes(size);
      },
    },
    variant: {
      type: String,
      default: '',
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    isTransparent: Boolean,
    isSquare: Boolean,
    isPulledRight: Boolean,
  },
  emits: ['click'],
  setup() {
    const isDark = useDarkMode();
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
});
</script>

<style scoped></style>
