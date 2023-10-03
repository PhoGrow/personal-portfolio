<template>
  <span
    :class="[
      `icon is-${size}`,
      isMounted ? `has-text-${variant || (isDark ? 'secondary' : 'dark')}` : '',
    ]"
  >
    <i
      class="material-icons-round"
      :style="{ fontSize: `${fontSizes[size]}rem` }"
    >
      {{ isMounted ? icon : 'pending' }}
    </i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '@stores';
import { useMounted } from '@vueuse/core';

export default defineComponent({
  name: 'AIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'large',
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
    const isDark = useDarkMode();
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
  data() {
    return {
      fontSizes: {
        small: 1,
        normal: 1.5,
        medium: 2,
        large: 3,
      } as {
        [size: string]: number;
      },
    };
  },
});
</script>

<style scoped></style>
