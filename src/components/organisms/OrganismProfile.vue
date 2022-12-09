<template>
  <MoleculeBoxWithTitle :title="title">
    <p class="is-size-5">{{ text }}</p>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MoleculeBoxWithTitle } from '@/components';

export default defineComponent({
  name: 'OrganismProfile',
  components: {
    MoleculeBoxWithTitle,
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
  },
});
</script>

<style scoped></style>
