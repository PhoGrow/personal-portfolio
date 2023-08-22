<template>
  <div
    :class="[
      'is-sticky',
      isMobileScreen && hasBackground
        ? `has-background-${isDark ? `dark` : `primary`} py-4`
        : '',
    ]"
    :style="{
      top: `${isMobileScreen ? 0 : top}rem`,
      margin: `0 ${margin}`,
      padding: `0 ${padding}`,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMobileBreakpoint, useDarkMode } from '@stores';

export default defineComponent({
  name: 'AExtendBg',
  props: {
    margin: {
      type: String,
      default: '-2rem',
    },
    hasBackground: {
      type: Boolean,
      default: true,
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    const isDark = useDarkMode();

    return { isMobileScreen, isDark };
  },
  computed: {
    padding(): string {
      return this.margin.replace('-', '');
    },
  },
});
</script>

<style scoped></style>
