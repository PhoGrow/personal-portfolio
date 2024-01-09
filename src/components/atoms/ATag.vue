<template>
  <span
    :class="[
      `tag is-rounded is-${size}`,
      isMounted ? `is-${variant || (isDark ? 'dark' : 'white')}` : '',
      {
        'has-text-weight-medium': size === 'large',
        'is-absolute': isAbsolute,
      },
    ]"
  >
    <slot></slot>
  </span>
</template>

<script setup lang="ts">
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

withDefaults(
  defineProps<{
    size?: 'normal' | 'medium' | 'large';
    variant?: string;
    isAbsolute?: boolean;
  }>(),
  {
    size: 'medium',
    variant: '',
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();
</script>

<style scoped></style>
