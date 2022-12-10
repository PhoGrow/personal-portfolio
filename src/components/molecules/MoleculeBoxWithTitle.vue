<template>
  <AtomBox>
    <AtomTitle :title="title" />
    <slot></slot>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomBox, AtomTitle } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculeBoxWithTitle',
  components: {
    AtomBox,
    AtomTitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
