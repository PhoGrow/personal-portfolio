<template>
  <section
    :class="[
      'box is-flex is-align-items-center is-justify-content-center py-6',
      `has-background-${isDark ? 'dark' : 'white'}`,
    ]"
  >
    <AIcon :icon="icon" size="large" :variant="isDark ? 'secondary' : 'dark'" />
    <p class="title ml-3">{{ title }}</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AIcon from '@atoms/AIcon.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'MIconWithTitle',
  components: {
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
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
