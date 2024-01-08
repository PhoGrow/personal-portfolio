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

<script lang="ts">
import { defineComponent } from 'vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
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
    isLoading: Boolean,
    isTransparent: Boolean,
    isSquare: Boolean,
    hasPointerEventsNone: Boolean,
    isPulledRight: Boolean,
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
});
</script>

<style scoped></style>
