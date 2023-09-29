<template>
  <AClientOnly>
    <progress
      :value="value"
      :max="max"
      :class="`progress is-${size} is-${
        variant || (isDark ? 'secondary' : 'dark')
      }`"
    >
      {{ (value / max) * 100 }}%
    </progress>
  </AClientOnly>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AClientOnly from '@atoms/AClientOnly.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'AProgress',
  components: {
    AClientOnly,
  },
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
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
