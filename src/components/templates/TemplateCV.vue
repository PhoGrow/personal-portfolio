<template>
  <OrganismCV>
    <template #personal-info>
      <OrganismPersonalInfo />
    </template>
    <template #profile>
      <OrganismProfile />
    </template>
    <template #education>
      <OrganismEducation />
    </template>
    <template #skills>
      <OrganismSkills />
    </template>
  </OrganismCV>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  OrganismCV,
  OrganismPersonalInfo,
  OrganismProfile,
  OrganismEducation,
  OrganismSkills,
} from '@/components/organisms';

export default defineComponent({
  name: 'TemplateCV',
  components: {
    OrganismCV,
    OrganismPersonalInfo,
    OrganismProfile,
    OrganismEducation,
    OrganismSkills,
  },
});
</script>

<style scoped></style>
