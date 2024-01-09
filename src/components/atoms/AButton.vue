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
        'is-loading': isLoading,
        'has-background-transparent has-border-color-transparent':
          isTransparent,
        'pointer-events-none': hasPointerEventsNone,
        'is-pulled-right': isPulledRight,
      },
    ]"
    :style="isSquare ? 'aspect-ratio: 1' : ''"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

withDefaults(
  defineProps<{
    href?: string;
    size?: 'small' | 'normal' | 'medium' | 'large';
    variant?: string;
    isRounded?: boolean;
    isLoading?: boolean;
    isTransparent?: boolean;
    isSquare?: boolean;
    hasPointerEventsNone?: boolean;
    isPulledRight?: boolean;
  }>(),
  {
    href: '',
    size: 'medium',
    variant: '',
    isRounded: true,
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();
</script>

<style scoped></style>
