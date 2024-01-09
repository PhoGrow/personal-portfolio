<template>
  <component
    :is="tag"
    :class="[
      'box is-flex is-align-items-center',
      isMounted ? `has-background-${isDark ? 'dark' : 'white'}` : '',
      `py-${hasSmallPadding ? 4 : 6}`,
      {
        'h-full': isFullheight,
        'w-full': isFullwidth,
        'is-justify-content-center': isJustifyContentCenter,
      },
    ]"
  >
    <AIcon :icon="icon" :size="size!" />
    <span class="title ml-3">{{ title }}</span>
  </component>
</template>

<script setup lang="ts">
import AIcon from '@atoms/AIcon.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

withDefaults(
  defineProps<{
    tag?: string;
    icon: string;
    size?: 'small' | 'normal' | 'medium' | 'large';
    title: string;
    hasSmallPadding?: boolean;
    isFullheight?: boolean;
    isFullwidth?: boolean;
    isJustifyContentCenter?: boolean;
  }>(),
  {
    tag: 'section',
    size: 'large',
    isJustifyContentCenter: true,
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
const isMounted = useMounted();
</script>

<style scoped></style>
