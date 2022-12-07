<template>
  <div>
    <AtomTitle class="is-1 is-spaced">{{ title }}</AtomTitle>
    <AtomSubtitle class="is-3">{{ subtitle }}</AtomSubtitle>
    <AtomButton :href="href">{{ callToAction }}</AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomTitle, AtomSubtitle, AtomButton } from '@/components';

export default defineComponent({
  name: 'MoleculeWelcome',
  components: {
    AtomTitle,
    AtomSubtitle,
    AtomButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    callToAction: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
