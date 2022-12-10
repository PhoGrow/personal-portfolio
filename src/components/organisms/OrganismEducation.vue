<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns>
      <AtomColumn class="is-3 has-text-right">
        <AtomSubtitle :subtitle="period" class="mb-0" />
        <AtomParagraph>{{ location }}</AtomParagraph>
      </AtomColumn>
      <AtomColumn class="is-6">
        <MoleculePropWithDesc
          :property="degree"
          :description="gpa"
          class="is-capitalized"
          prop-class="subtitle has-text-weight-semibold"
          desc-class="has-text-grey"
        />
        <AtomParagraph>{{ university }}</AtomParagraph>
        <AtomSpace value="3" />
        <MoleculePropWithDesc
          v-for="(activity, i) of activities"
          :key="activity[0]"
          :property="activity[0]"
          :description="activity[1]"
          :class="{ 'mb-3': i !== activities.length - 1 }"
        />
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculePropWithDesc,
} from '@/components/molecules';
import {
  AtomColumns,
  AtomColumn,
  AtomParagraph,
  AtomSpace,
  AtomSubtitle,
} from '@/components/atoms';
import type { Education } from '@/types';

export default defineComponent({
  name: 'OrganismEducation',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    MoleculePropWithDesc,
    AtomParagraph,
    AtomSpace,
    AtomSubtitle,
  },
  props: {
    title: {
      type: String,
      default: 'Education',
    },
    education: {
      type: Object as PropType<Education>,
      required: true,
    },
  },
  data() {
    return {
      ...this.education,
    };
  },
});
</script>

<style scoped></style>
