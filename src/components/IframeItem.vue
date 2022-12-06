<template>
  <figure class="image is-3by2 is-hidden-touch">
    <iframe :src="src" :title="title" class="has-ratio"></iframe>
    <figcaption class="has-text-centered is-size-5 has-text-weight-medium mt-2">
      <slot></slot>
    </figcaption>
  </figure>
  <figure class="image is-5by4 is-hidden-desktop">
    <iframe :src="src" :title="title" class="has-ratio"></iframe>
    <figcaption class="has-text-centered is-size-5 has-text-weight-medium mt-2">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
