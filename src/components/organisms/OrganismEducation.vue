<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns
      v-for="(
        { period, location, degree, gpa, university, activities }, i
      ) of education"
      :key="degree"
      :class="{ 'mb-5': i !== education.length - 1 }"
    >
      <AtomColumn
        :class="[
          'is-3',
          isMobileScreen ? 'has-text-centered' : 'has-text-right',
          { 'py-2': isMobileScreen },
        ]"
      >
        <AtomSubtitle :text="period" class="mb-0" />
        <p>{{ location }}</p>
      </AtomColumn>
      <AtomColumn :class="['is-6', { 'py-2': isMobileScreen }]">
        <AtomExtendBg
          :is-extended="isMobileScreen"
          :class="{ 'has-background-yellow py-3': isMobileScreen }"
        >
          <p>
            <AtomSubtitle
              tag="span"
              :text="degree"
              class="has-text-weight-semibold mr-2"
            />
            <span class="has-text-grey">{{ gpa }}</span>
          </p>
          <p>{{ university }}</p>
        </AtomExtendBg>
        <AtomSpace value="2" />
        <AtomHeading
          v-for="({ property, description, linkage }, j) of activities"
          :key="property"
          :text="property"
          :class="{ 'mb-3': j !== activities.length - 1 }"
        >
          <MoleculeTextWithLink
            v-if="linkage"
            tag="span"
            :text="description"
            :linkage="linkage"
          />
          <span v-else>{{ description }}</span>
        </AtomHeading>
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  MoleculeBoxWithTitle,
  MoleculeTextWithLink,
} from '@/components/molecules';
import {
  AtomColumns,
  AtomColumn,
  AtomSubtitle,
  AtomExtendBg,
  AtomSpace,
  AtomHeading,
} from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';
import type { Education } from '@/types';

export default defineComponent({
  name: 'OrganismEducation',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    AtomSubtitle,
    AtomExtendBg,
    AtomSpace,
    AtomHeading,
    MoleculeTextWithLink,
  },
  props: {
    title: {
      type: String,
      default: 'Education',
    },
    education: {
      type: Array as PropType<Education[]>,
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
