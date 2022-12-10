<template>
  <div>
    <AtomTitle :title="title" class="is-1 is-spaced" />
    <AtomSubtitle :subtitle="subtitle" class="is-3" />
    <AtomButton :href="href">{{ callToAction }}</AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomTitle, AtomSubtitle, AtomButton } from '@/components/atoms';
import type { Welcome } from '@/types';

export default defineComponent({
  name: 'MoleculeWelcome',
  components: {
    AtomTitle,
    AtomSubtitle,
    AtomButton,
  },
  props: {
    welcome: {
      type: Object as PropType<Welcome>,
      required: true,
    },
  },
  data() {
    return {
      ...this.welcome,
    };
  },
});
</script>

<style scoped></style>
