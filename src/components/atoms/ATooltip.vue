<template>
  <OTooltip
    :label="isMounted ? label : ''"
    :position="isMounted ? position : 'bottom'"
    :variant="isMounted ? variant || (isDark ? 'secondary' : 'dark') : ''"
  >
    <slot></slot>
  </OTooltip>
</template>

<script setup lang="ts">
import { OTooltip } from '@oruga-ui/oruga-next';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

withDefaults(
  defineProps<{
    label: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    variant?: string;
  }>(),
  {
    position: 'bottom',
    variant: '',
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();
</script>

<style scoped>
.b-tooltip :deep(.tooltip-content) {
  font-size: 1rem;
  font-weight: 500;
}

.b-tooltip :deep(.tooltip-trigger) {
  display: flex;
}
</style>
