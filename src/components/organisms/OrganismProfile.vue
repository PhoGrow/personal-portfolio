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
import { defineComponent } from 'vue';
import MoleculeBoxWithTitle from '@/components/molecules/MoleculeBoxWithTitle.vue';
import MoleculeTextWithLink from '@/components/molecules/MoleculeTextWithLink.vue';
import { useProfileStore } from '@/stores';

export default defineComponent({
  name: 'OrganismProfile',
  components: {
    MoleculeBoxWithTitle,
    MoleculeTextWithLink,
  },
  setup() {
    const { title, text, linkage } = useProfileStore();
    return { title, text, linkage };
  },
});
</script>

<style scoped></style>
