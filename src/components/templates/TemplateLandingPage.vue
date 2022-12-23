<template>
  <OrganismLandingPage>
    <template #navbar>
      <OrganismNavbar />
    </template>
    <template #welcome>
      <MoleculeWelcome :welcome="welcome" />
    </template>
    <template #work>
      <MoleculeIframe :iframe="iframe" />
    </template>
  </OrganismLandingPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OrganismLandingPage, OrganismNavbar } from '@/components/organisms';
import { MoleculeWelcome, MoleculeIframe } from '@/components/molecules';
import { useWelcomeStore, useIframeStore } from '@/stores';

export default defineComponent({
  name: 'TemplateLandingPage',
  components: {
    OrganismLandingPage,
    OrganismNavbar,
    MoleculeWelcome,
    MoleculeIframe,
  },
  setup() {
    const { $state: welcome } = useWelcomeStore();
    const { $state: iframe } = useIframeStore();

    return { welcome, iframe };
  },
});
</script>

<style scoped></style>
