<template>
  <MoleculeBoxWithTitle :title="title">
    <AtomColumns
      v-for="(
        { period, location, degree, gpa, university, activities }, i
      ) of education"
      :key="degree"
      :class="['is-gapless', { 'mb-5': i !== education.length - 1 }]"
    >
      <AtomColumn
        :class="[
          'is-3',
          isMobileScreen ? 'has-text-centered' : 'has-text-right',
        ]"
      >
        <AtomSubtitle :text="period" class="mb-0" />
        <p>{{ location }}</p>
      </AtomColumn>
      <AtomColumn class="is-narrow m-4" />
      <AtomColumn class="is-6">
        <AtomExtendBg :top="0.5">
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
import { defineComponent } from 'vue';
import MoleculeBoxWithTitle from '@/components/molecules/MoleculeBoxWithTitle.vue';
import MoleculeTextWithLink from '@/components/molecules/MoleculeTextWithLink.vue';
import AtomExtendBg from '@/components/atoms/AtomExtendBg.vue';
import AtomColumns from '@/components/atoms/AtomColumns.vue';
import AtomColumn from '@/components/atoms/AtomColumn.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import AtomSpace from '@/components/atoms/AtomSpace.vue';
import AtomHeading from '@/components/atoms/AtomHeading.vue';
import { useEducationStore, useMobileBreakpoint } from '@/stores';

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
  setup() {
    const { title, education } = useEducationStore();
    const isMobileScreen = useMobileBreakpoint();

    return { title, education, isMobileScreen };
  },
});
</script>

<style scoped></style>
