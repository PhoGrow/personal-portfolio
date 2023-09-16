<template>
  <span :class="[`icon is-${size}`, variant ? `has-text-${variant}` : '']">
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
  name: 'AIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'normal',
    },
    variant: {
      type: String,
      default: '',
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
