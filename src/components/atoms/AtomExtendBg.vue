<template>
  <div
    :class="[
      'is-sticky',
      isMobileScreen ? `is-extended py-4 ${customClass}` : '',
    ]"
    :style="`top: ${isMobileScreen ? 0 : top}rem`"
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

<style scoped>
.is-extended {
  margin: 0 v-bind(margin);
  padding: 0 v-bind(padding);
}
</style>
