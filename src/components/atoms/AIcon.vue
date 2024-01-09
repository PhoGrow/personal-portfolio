<template>
  <span
    :class="[
      `icon is-${size}`,
      isMounted ? `has-text-${variant || (isDark ? 'secondary' : 'dark')}` : '',
    ]"
  >
    <i
      class="material-icons-round"
      :style="{ fontSize: `${fontSizes[size!]}rem` }"
    >
      {{ isMounted ? icon : 'pending' }}
    </i>
  </span>
</template>

<script setup lang="ts">
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    icon: string;
    size?: 'small' | 'normal' | 'medium' | 'large';
    variant?: string;
  }>(),
  {
    size: 'large',
    variant: '',
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();

const fontSizes = {
  small: 1,
  normal: 1.5,
  medium: 2,
  large: 3,
} as const satisfies Record<typeof props.size, 1 | 1.5 | 2 | 3>;
</script>

<style scoped></style>
