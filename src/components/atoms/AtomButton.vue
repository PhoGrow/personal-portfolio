<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : null"
    :class="[
      `button is-${size}`,
      variant ? `is-${variant}` : '',
      {
        'is-rounded': isRounded,
        'has-background-transparent': isTransparent,
      },
    ]"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomButton',
  props: {
    tag: {
      type: String,
      default: 'a',
    },
    href: {
      type: String,
      default: '#',
    },
    size: {
      type: String,
      default: 'medium',
    },
    variant: {
      type: String,
      default: '',
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    isTransparent: Boolean,
  },
});
</script>

<style scoped></style>
