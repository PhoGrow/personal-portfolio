<template>
  <div
    :class="['is-sticky', isMobileScreen ? `py-4 ${customClass}` : '']"
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
import { useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'AtomExtendBg',
  props: {
    margin: {
      type: String,
      default: '-2rem',
    },
    customClass: {
      type: String,
      default: '',
    },
    top: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    return { isMobileScreen };
  },
  computed: {
    padding(): string {
      return this.margin.replace('-', '');
    },
  },
});
</script>

<style scoped></style>
