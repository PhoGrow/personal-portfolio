<template>
  <OrganismLandingPage>
    <template #navbar>
      <OrganismNavbar />
    </template>
    <template #welcome>
      <OrganismWelcome />
    </template>
    <template #work>
      <OrganismIframe />
    </template>
  </OrganismLandingPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  OrganismLandingPage,
  OrganismNavbar,
  OrganismWelcome,
  OrganismIframe,
} from '@/components/organisms';

export default defineComponent({
  name: 'TemplateLandingPage',
  components: {
    OrganismLandingPage,
    OrganismNavbar,
    OrganismWelcome,
    OrganismIframe,
  },
});
</script>

<style scoped></style>
