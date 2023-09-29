<template>
  <AClientOnly>
    <component
      :is="tag"
      :class="[
        'box is-flex is-align-items-center',
        `has-background-${isDark ? 'dark' : 'white'}`,
        `py-${hasSmallPadding ? 4 : 6}`,
        {
          'h-full': isFullheight,
          'w-full': isFullwidth,
          'is-justify-content-center': isJustifyContentCenter,
        },
      ]"
    >
      <AIcon :icon="icon" :size="size" />
      <p class="title ml-3">{{ title }}</p>
    </component>
  </AClientOnly>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AClientOnly from '@atoms/AClientOnly.vue';
import AIcon from '@atoms/AIcon.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'MIconWithTitle',
  components: {
    AClientOnly,
    AIcon,
  },
  props: {
    tag: {
      type: String,
      default: 'section',
    },
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'large',
    },
    title: {
      type: String,
      required: true,
    },
    hasSmallPadding: Boolean,
    isFullheight: Boolean,
    isFullwidth: Boolean,
    isJustifyContentCenter: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
