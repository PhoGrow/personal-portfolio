<template>
  <MoleculeHero
    v-if="isCvVisible"
    :id="href.substring(1)"
    :has-horizontal-padding="hasHorizontalPadding"
  >
    <AtomTitle :text="title" class="is-1 has-text-centered" />
    <slot name="personal-info"></slot>
    <AtomSpace value="4" />
    <slot name="profile"></slot>
    <AtomSpace value="4" />
    <slot name="education"></slot>
    <AtomSpace value="4" />
    <slot name="skills"></slot>
    <OrganismDownloadButton />
  </MoleculeHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrganismDownloadButton from '@/components/organisms/OrganismDownloadButton.vue';
import MoleculeHero from '@/components/molecules/MoleculeHero.vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';
import AtomSpace from '@/components/atoms/AtomSpace.vue';
import { useWelcomeStore, useGlobalState } from '@/stores';

export default defineComponent({
  name: 'OrganismCV',
  components: {
    MoleculeHero,
    AtomTitle,
    AtomSpace,
    OrganismDownloadButton,
  },
  props: {
    hasHorizontalPadding: Boolean,
    title: {
      type: String,
      default: 'CV',
    },
  },
  setup() {
    const { href } = useWelcomeStore();
    const { isCvVisible } = useGlobalState();

    return { href, isCvVisible };
  },
});
</script>

<style scoped></style>
