<!-- eslint-disable vue/no-v-html -->
<template>
  <MoleculeBoxWithTitle :title="title">
    <MoleculeTextWithLink
      tag="p"
      :text="text"
      :linkage="linkage"
      class="is-size-5"
    />
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculeTextWithLink,
} from '@/components/molecules';
import type { Linkage } from '@/types';

export default defineComponent({
  name: 'OrganismProfile',
  components: {
    MoleculeBoxWithTitle,
    MoleculeTextWithLink,
  },
  props: {
    title: {
      type: String,
      default: 'Profile',
    },
    text: {
      type: String,
      required: true,
    },
    linkage: {
      type: Object as PropType<Linkage>,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
