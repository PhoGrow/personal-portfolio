<template>
  <component
    :is="tag"
    :href="tag === 'a' ? href : null"
    :class="[
      `button is-${size}`,
      variant ? `is-${variant}` : '',
      {
        'is-rounded': isRounded,
        'has-background-transparent has-border-color-transparent':
          isTransparent,
        'is-dark': isDark,
      },
    ]"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'AButton',
  props: {
    tag: {
      type: String,
      default: 'a', // button
      validator(tag: string) {
        return ['button', 'a'].includes(tag);
      },
    },
    href: {
      type: String,
      default: '#', // no default, no tag prop needed (href ? 'a' : 'button')
    },
    size: {
      type: String,
      default: 'medium',
      validator(size: string) {
        return ['small', 'normal', 'medium', 'large'].includes(size);
      },
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
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
