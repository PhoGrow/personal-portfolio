<template>
  <progress
    :value="value"
    :max="max"
    :class="[
      `progress is-${size}`,
      isMounted ? `is-${variant || (isDark ? 'secondary' : 'dark')}` : '',
    ]"
  >
    {{ (value / max) * 100 }}%
  </progress>
</template>

<script setup lang="ts">
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

withDefaults(
  defineProps<{
    value: number;
    max: number;
    size?: 'small' | 'normal' | 'medium' | 'large';
    variant?: string;
  }>(),
  {
    size: 'small',
    variant: '',
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();
</script>

<style scoped></style>
