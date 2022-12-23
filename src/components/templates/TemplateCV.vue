<template>
  <OrganismCV :id="href.substring(1)">
    <template #personal-info>
      <OrganismPersonalInfo :info="personalInfo" />
    </template>
    <template #profile>
      <OrganismProfile v-bind="profile" />
    </template>
    <template #education>
      <OrganismEducation :education="education" />
    </template>
    <template #skills>
      <OrganismSkills :skill-sets="skillSets" />
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
import {
  useWelcomeStore,
  usePersonalInfoStore,
  useProfileStore,
  useEducationStore,
  useSkillsStore,
} from '@/stores';

export default defineComponent({
  name: 'TemplateCV',
  components: {
    OrganismCV,
    OrganismPersonalInfo,
    OrganismProfile,
    OrganismEducation,
    OrganismSkills,
  },
  setup() {
    const { href } = useWelcomeStore();
    const { $state: personalInfo } = usePersonalInfoStore();
    const { $state: profile } = useProfileStore();
    const { education } = useEducationStore();
    const { skillSets } = useSkillsStore();

    return { href, personalInfo, profile, education, skillSets };
  },
});
</script>

<style scoped></style>
