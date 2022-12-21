<template>
  <div>
    <AtomTitle :text="title" class="is-1 is-spaced" />
    <AtomSubtitle :text="subtitle" class="is-3" />
    <AtomButton :href="href" @click.once="useToast">{{
      callToAction
    }}</AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomTitle, AtomSubtitle, AtomButton } from '@/components/atoms';
import { useToast } from '@/stores';
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
  setup() {
    return {
      useToast,
    };
  },
  data() {
    return {
      ...this.welcome,
    };
  },
});
</script>

<style scoped></style>
