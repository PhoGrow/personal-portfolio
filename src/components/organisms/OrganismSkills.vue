<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns class="is-variable is-4">
      <AtomColumn
        v-for="skillSet of skillSets"
        :key="skillSet.title"
        class="is-6"
      >
        <AtomExtendBg
          :is-extended="isMobileScreen"
          :class="['mb-2', { 'has-background-yellow py-4': isMobileScreen }]"
        >
          <AtomSubtitle
            :text="skillSet.title"
            class="has-text-weight-semibold is-4 has-text-centered"
          />
        </AtomExtendBg>
        <AtomBox
          v-for="({ property, linkage }, index) of skillSet.skills"
          :key="property"
          :class="[
            'is-size-5 mb-0',
            { 'has-background-white': index % 2 !== 0 },
          ]"
        >
          <MoleculeTextWithLink
            v-if="linkage"
            tag="p"
            :text="property"
            :linkage="linkage"
          />
          <p v-else>{{ property }}</p>
        </AtomBox>
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculeTextWithLink,
} from '@/components/molecules';
import {
  AtomColumns,
  AtomColumn,
  AtomExtendBg,
  AtomSubtitle,
  AtomBox,
} from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';
import type { SkillSet } from '@/types';

export default defineComponent({
  name: 'OrganismSkills',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    AtomExtendBg,
    AtomSubtitle,
    AtomBox,
    MoleculeTextWithLink,
  },
  props: {
    title: {
      type: String,
      default: 'Skills',
    },
    skillSets: {
      type: Array as PropType<SkillSet[]>,
      required: true,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    return { isMobileScreen };
  },
});
</script>

<style scoped></style>
