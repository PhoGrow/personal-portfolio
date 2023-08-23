<template>
  <MBoxWithTitle :title="title">
    <AColumns class="is-variable is-4">
      <AColumn
        v-for="(skillSet, i) of skillSets"
        :key="skillSet.title"
        :class="[
          `is-${12 / skillSets.length}`,
          { 'mb-4': isMobileScreen && i !== skillSets.length - 1 },
        ]"
      >
        <AExtendBg :top="3.5 + 1.25">
          <ASubtitle
            :text="skillSet.title"
            class="has-text-weight-semibold is-4 has-text-centered"
          />
        </AExtendBg>
        <div
          v-for="({ property, linkage }, j) of skillSet.skills"
          :key="property"
          :class="[
            'box is-size-5 mb-0',
            j % 2 !== 0 ? `has-background-${isDark ? 'dark' : 'white'}` : '',
          ]"
        >
          <MTextWithLink
            v-if="linkage"
            tag="p"
            :text="property"
            :linkage="linkage"
          />
          <p v-else>{{ property }}</p>
        </div>
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
import AExtendBg from '@atoms/AExtendBg.vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import {
  useSkillsStore,
  useMobileBreakpoint,
  useDarkMode,
  store,
} from '@/stores';

export default defineComponent({
  name: 'OSkills',
  components: {
    MBoxWithTitle,
    AColumns,
    AColumn,
    AExtendBg,
    ASubtitle,
    MTextWithLink,
  },
  setup() {
    const { title, skillSets } = useSkillsStore(store);
    const isMobileScreen = useMobileBreakpoint();
    const isDark = useDarkMode();

    return { title, skillSets, isMobileScreen, isDark };
  },
});
</script>

<style scoped></style>
