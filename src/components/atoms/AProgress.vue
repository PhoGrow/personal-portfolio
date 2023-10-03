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

<script lang="ts">
import { defineComponent } from 'vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

export default defineComponent({
  name: 'AProgress',
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
      validator(size: string) {
        return ['small', 'normal', 'medium', 'large'].includes(size);
      },
    },
    variant: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
});
</script>

<style scoped></style>
