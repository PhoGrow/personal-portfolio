<template>
  <MoleculeHero :has-hero-head="hasNavbar" is-fullheight>
    <template #header>
      <slot name="navbar"></slot>
    </template>
    <AtomColumns class="is-vcentered">
      <AtomColumn>
        <slot name="welcome"></slot>
      </AtomColumn>
      <AtomColumn class="is-narrow"></AtomColumn>
      <AtomColumn>
        <slot name="work"></slot>
      </AtomColumn>
    </AtomColumns>
  </MoleculeHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoleculeHero from '@/components/molecules/MoleculeHero.vue';
import { AtomColumns, AtomColumn } from '@/components/atoms';

export default defineComponent({
  name: 'LandingPage',
  components: {
    MoleculeHero,
    AtomColumns,
    AtomColumn,
  },
  props: {
    hasNavbar: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
