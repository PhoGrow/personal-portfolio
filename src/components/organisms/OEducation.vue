<template>
  <MBoxWithTitle :title="title">
    <AColumns
      v-for="(
        { period, location, degree, gpa, university, activities }, i
      ) of education"
      :key="degree"
      :class="['is-gapless', { 'mb-5': i !== education.length - 1 }]"
    >
      <AColumn
        :class="[
          'is-3',
          isMobileScreen ? 'has-text-centered' : 'has-text-right',
        ]"
      >
        <ASubtitle :text="period" class="mb-0" />
        <p>{{ location }}</p>
      </AColumn>
      <AColumn class="is-narrow m-4" />
      <AColumn class="is-6">
        <AExtendBg :top="3.5 + 0.5">
          <p>
            <ASubtitle
              tag="span"
              :text="degree"
              class="has-text-weight-semibold mr-2"
            />
            <span class="has-text-grey">{{ gpa }}</span>
          </p>
          <p>{{ university }}</p>
        </AExtendBg>
        <ASpace value="2" />
        <AHeading
          v-for="({ property, description, linkage }, j) of activities"
          :key="property"
          :text="property"
          :class="{ 'mb-3': j !== activities.length - 1 }"
        >
          <MTextWithLink
            v-if="linkage"
            tag="span"
            :text="description"
            :linkage="linkage"
          />
          <span v-else>{{ description }}</span>
        </AHeading>
      </AColumn>
    </AColumns>
  </MBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTitle from '@molecules/MBoxWithTitle.vue';
import MTextWithLink from '@molecules/MTextWithLink.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import AExtendBg from '@atoms/AExtendBg.vue';
import ASpace from '@atoms/ASpace.vue';
import AHeading from '@atoms/AHeading.vue';
import { useEducationStore, useMobileBreakpoint, store } from '@stores';

export default defineComponent({
  name: 'OEducation',
  components: {
    MBoxWithTitle,
    AColumns,
    AColumn,
    ASubtitle,
    AExtendBg,
    ASpace,
    AHeading,
    MTextWithLink,
  },
  setup() {
    const { title, education } = useEducationStore(store);
    const isMobileScreen = useMobileBreakpoint();

    return { title, education, isMobileScreen };
  },
});
</script>

<style scoped></style>
