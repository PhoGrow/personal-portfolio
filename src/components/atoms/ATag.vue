<template>
  <AClientOnly>
    <span
      :class="[
        `tag is-rounded is-${size}`,
        `is-${variant || (isDark ? 'dark' : 'white')}`,
        {
          'has-text-weight-medium': size === 'large',
          'is-absolute': isAbsolute,
        },
      ]"
    >
      <slot></slot>
    </span>
  </AClientOnly>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AClientOnly from '@atoms/AClientOnly.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'ATag',
  components: {
    AClientOnly,
  },
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
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
