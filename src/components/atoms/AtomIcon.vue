<template>
  <span :class="['icon', `is-${size}`]">
    <i
      class="material-icons-round"
      :style="{ fontSize: `${fontSizes[size]}rem` }"
    >
      {{ icon }}
    </i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  data() {
    return {
      fontSizes: {
        small: 1,
        normal: 1.5,
        medium: 2,
        large: 3,
      } as { [size: string]: number },
    };
  },
});
</script>

<style scoped></style>
