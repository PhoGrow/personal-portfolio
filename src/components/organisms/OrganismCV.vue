<template>
  <MoleculeHero :has-horizontal-padding="hasHorizontalPadding">
    <AtomTitle :text="title" class="is-1 has-text-centered" />
    <slot name="personal-info"></slot>
    <AtomSpace value="4" />
    <slot name="profile"></slot>
    <AtomSpace value="4" />
    <slot name="education"></slot>
    <AtomSpace value="4" />
    <slot name="skills"></slot>
  </MoleculeHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MoleculeHero } from '@/components/molecules';
import { AtomTitle, AtomSpace } from '@/components/atoms';

export default defineComponent({
  name: 'OrganismCV',
  components: {
    MoleculeHero,
    AtomTitle,
    AtomSpace,
  },
  props: {
    hasHorizontalPadding: Boolean,
    title: {
      type: String,
      default: 'CV',
    },
  },
});
</script>

<style scoped></style>
