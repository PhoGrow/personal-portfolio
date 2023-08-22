<template>
  <component :is="tag">
    {{ splitText[0] }}
    <ALink v-bind="linkage" class="has-text-weight-semibold" />
    {{ splitText[1] }}
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ALink from '@atoms/ALink.vue';
import type { Linkage } from '@stores';

export default defineComponent({
  name: 'MTextWithLink',
  components: {
    ALink,
  },
  props: {
    tag: {
      type: String,
      default: 'span',
    },
    text: {
      type: String,
      required: true,
    },
    linkage: {
      type: Object as PropType<Linkage>,
      required: true,
    },
  },
  computed: {
    splitText(): string[] {
      return this.text.split(this.linkage.title);
    },
  },
});
</script>

<style scoped></style>
