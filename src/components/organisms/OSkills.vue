<template>
  <AColumns>
    <AColumn>
      <div
        v-for="({ category, subcategories, items, rating }, i) of hardSkills"
        :key="category"
        :class="[
          'box is-relative h-full pt-6',
          { 'mb-6': i !== hardSkills.length - 1 },
        ]"
      >
        <MTagWithProgress
          :tag="{ size: 'large', variant: isDark ? 'primary' : 'white' }"
          :progress="
            rating?.length
              ? { value: rating[0], max: rating[1] }
              : ({} as Progress)
          "
          class="is-absolute"
        >
          {{ category }}
        </MTagWithProgress>
        <template v-if="subcategories?.length">
          <div v-for="subcat of subcategories" :key="subcat.name" class="block">
            <MTagWithProgress
              :tag="{ variant: 'secondary' }"
              :progress="{ value: subcat.rating[0], max: subcat.rating[1] }"
            >
              {{ subcat.name }}
            </MTagWithProgress>
            <MTags :tags="subcat.items" />
          </div>
        </template>
        <MTags v-if="items?.length" :tags="items" />
      </div>
    </AColumn>
    <AColumn class="is-narrow"></AColumn>
    <AColumn>
      <div class="box is-relative h-full pt-6">
        <MTagWithProgress
          :tag="{ size: 'large', variant: isDark ? 'primary' : 'white' }"
          class="is-absolute"
        >
          {{ softSkills.title }}
        </MTagWithProgress>
        <div
          class="h-full is-flex is-flex-wrap-wrap is-align-content-space-between"
        >
          <p
            v-for="item of softSkills.items"
            :key="item"
            :class="`title w-full px-5 py-4 is-rounded has-background-${
              isDark ? 'dark' : 'white'
            }`"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </AColumn>
  </AColumns>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MTagWithProgress from '@molecules/MTagWithProgress.vue';
import MTags from '@molecules/MTags.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import type { Progress } from '@atoms/AProgress.vue';
import {
  useSkillsStore,
  useMobileBreakpoint,
  useDarkMode,
  store,
} from '@/stores';

export default defineComponent({
  name: 'OSkills',
  components: {
    AColumns,
    AColumn,
    MTagWithProgress,
    MTags,
  },
  setup() {
    const { hardSkills, softSkills } = useSkillsStore(store);
    const isMobile = useMobileBreakpoint();
    const isDark = useDarkMode();

    return { hardSkills, softSkills, isMobile, isDark };
  },
});
</script>

<style scoped></style>
