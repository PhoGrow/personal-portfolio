<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns class="is-variable is-4">
      <AtomColumn
        v-for="(skillSet, i) of skillSets"
        :key="skillSet.title"
        :class="[
          `is-${12 / skillSets.length}`,
          { 'mb-4': isMobileScreen && i !== skillSets.length - 1 },
        ]"
      >
        <AtomExtendBg :top="1.25">
          <AtomSubtitle
            :text="skillSet.title"
            class="has-text-weight-semibold is-4 has-text-centered"
          />
        </AtomExtendBg>
        <AtomBox
          v-for="({ property, linkage }, j) of skillSet.skills"
          :key="property"
          :class="['is-size-5 mb-0', { 'has-background-white': j % 2 !== 0 }]"
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
import { defineComponent } from 'vue';
import MoleculeBoxWithTitle from '@/components/molecules/MoleculeBoxWithTitle.vue';
import MoleculeTextWithLink from '@/components/molecules/MoleculeTextWithLink.vue';
import AtomExtendBg from '@/components/atoms/AtomExtendBg.vue';
import AtomColumns from '@/components/atoms/AtomColumns.vue';
import AtomColumn from '@/components/atoms/AtomColumn.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import AtomBox from '@/components/atoms/AtomBox.vue';
import { useSkillsStore, useMobileBreakpoint } from '@/stores';

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
  setup() {
    const { title, skillSets } = useSkillsStore();
    const isMobileScreen = useMobileBreakpoint();

    return { title, skillSets, isMobileScreen };
  },
});
</script>

<style scoped></style>
