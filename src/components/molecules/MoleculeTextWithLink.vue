<template>
  <component :is="tag">
    {{ splitText[0] }}
    <AtomLink v-bind="linkage" class="has-text-weight-semibold" />
    {{ splitText[1] }}
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomLink } from '@/components/atoms';
import type { Linkage } from '@/types';

export default defineComponent({
  name: 'MoleculeTextWithLink',
  components: {
    AtomLink,
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
