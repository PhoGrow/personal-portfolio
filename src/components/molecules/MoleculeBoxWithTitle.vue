<template>
  <AtomBox>
    <AtomTitle :title="title" />
    <slot></slot>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomBox from '@/components/atoms/AtomBox.vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';

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
