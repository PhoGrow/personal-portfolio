<template>
  <div>
    <AtomParagraph v-for="p of paragraphs" :key="p">{{ p }}</AtomParagraph>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomParagraph } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculeParagraphs',
  components: {
    AtomParagraph,
  },
  props: {
    paragraphs: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
