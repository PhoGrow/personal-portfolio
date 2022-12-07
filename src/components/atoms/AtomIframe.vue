<template>
  <figure :class="['image', isTouchScreen ? 'is-5by4' : 'is-3by2']">
    <iframe :src="src" :title="title" class="has-ratio"></iframe>
    <figcaption class="has-text-centered is-size-5 has-text-weight-medium mt-2">
      {{ caption.replace(title, '') }}
      <a :href="src">{{ title }}</a>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMediaQuery } from '@vueuse/core';

export default defineComponent({
  name: 'IframeItem',
  props: {
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isTouchScreen = useMediaQuery('(max-width: 1023px)');
    return { isTouchScreen };
  },
});
</script>

<style scoped>
iframe {
  border-radius: 2rem;
}

figcaption {
  position: absolute;
  width: 100%;
}
</style>
