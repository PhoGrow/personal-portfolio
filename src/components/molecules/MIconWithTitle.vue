<template>
  <AClientOnly>
    <section
      :class="[
        'box is-flex is-align-items-center is-justify-content-center py-6',
        `has-background-${isDark ? 'dark' : 'white'}`,
        { 'h-full': isFullheight },
      ]"
    >
      <AIcon :icon="icon" />
      <p class="title ml-3">{{ title }}</p>
    </section>
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
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isFullheight: Boolean,
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
