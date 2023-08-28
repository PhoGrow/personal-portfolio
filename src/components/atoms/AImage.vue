<template>
  <img
    :src="src"
    :alt="alt"
    :loading="isLazyLoaded ? 'lazy' : 'eager'"
    :class="{ 'is-rounded': isRounded }"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    isLazyLoaded: Boolean,
    isRounded: Boolean,
    isInverted: Boolean,
  },
  computed: {
    invert(): number {
      return this.isInverted ? 1 : 0;
    },
  },
});
</script>

<style scoped>
img {
  filter: invert(v-bind(invert));
}

html.dark img {
  filter: invert(v-bind(invert)) brightness(0.8) contrast(1.2)
    drop-shadow(0px 0px 0px #ffffff);
}
</style>
