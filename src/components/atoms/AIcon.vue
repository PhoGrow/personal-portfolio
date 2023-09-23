<template>
  <AClientOnly>
    <span
      :class="[
        `icon is-${size}`,
        `has-text-${variant || (isDark ? 'secondary' : 'dark')}`,
      ]"
    >
      <i
        class="material-icons-round"
        :style="{ fontSize: `${fontSizes[size]}rem` }"
      >
        {{ icon }}
      </i>
    </span>
  </AClientOnly>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AClientOnly from '@atoms/AClientOnly.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'AIcon',
  components: {
    AClientOnly,
  },
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
    return { isDark };
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
