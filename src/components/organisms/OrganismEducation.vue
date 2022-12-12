<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns
      v-for="(
        { period, location, degree, gpa, university, activities }, i
      ) of education"
      :key="degree"
      :class="{ 'mb-5': i !== education.length - 1 }"
    >
      <AtomColumn class="is-3 has-text-right">
        <AtomSubtitle :text="period" class="mb-0" />
        <p>{{ location }}</p>
      </AtomColumn>
      <AtomColumn class="is-6">
        <p>
          <AtomSubtitle
            tag="span"
            :text="degree"
            class="has-text-weight-semibold mr-2"
          />
          <span class="has-text-grey">{{ gpa }}</span>
        </p>
        <p>{{ university }}</p>
        <AtomSpace value="3" />
        <AtomHeading
          v-for="({ property, description }, j) of activities"
          :key="property"
          :text="property"
          :class="{ 'mb-3': j !== activities.length - 1 }"
        >
          <span>{{ description }}</span>
        </AtomHeading>
      </AtomColumn>
    </AtomColumns>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { MoleculeBoxWithTitle } from '@/components/molecules';
import {
  AtomColumns,
  AtomColumn,
  AtomSubtitle,
  AtomSpace,
  AtomHeading,
} from '@/components/atoms';
import type { Education } from '@/types';

export default defineComponent({
  name: 'OrganismEducation',
  components: {
    MoleculeBoxWithTitle,
    AtomColumns,
    AtomColumn,
    AtomSubtitle,
    AtomSpace,
    AtomHeading,
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
});
</script>

<style scoped></style>
