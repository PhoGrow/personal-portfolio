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

<script lang="ts">
import { defineComponent } from 'vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

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
    isAbsolute: Boolean,
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
});
</script>

<style scoped></style>
