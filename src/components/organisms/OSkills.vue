<template>
  <AColumns>
    <AColumn>
      <MBoxWithTag title="My hard skills">
        <div
          v-for="{ name, items, rating } of hardSkills"
          :key="name"
          class="block"
        >
          <AColumns class="is-vcentered is-mobile">
            <AColumn class="is-narrow">
              <ATag variant="secondary">{{ name }}</ATag>
            </AColumn>
            <AColumn>
              <AProgress :value="rating[0]" :max="rating[1]" />
            </AColumn>
          </AColumns>
          <MTags :tags="items" />
        </div>
      </MBoxWithTag>
    </AColumn>
    <AColumn class="is-narrow"></AColumn>
    <AColumn>
      <MBoxWithTag title="My soft skills">
        <ul
          class="is-flex is-flex-wrap-wrap is-align-content-space-between h-full"
        >
          <li
            v-for="{ icon, name } of softSkills"
            :key="name"
            :class="`is-flex is-align-items-center title w-full px-5 py-4 is-rounded has-background-${
              isDark ? 'dark' : 'white'
            }`"
          >
            <AIcon
              :icon="icon"
              size="medium"
              :variant="isDark ? 'secondary' : 'dark'"
            />
            <span class="ml-3">{{ name }}</span>
          </li>
        </ul>
      </MBoxWithTag>
    </AColumn>
  </AColumns>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MTags from '@molecules/MTags.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import ATag from '@atoms/ATag.vue';
import AProgress from '@atoms/AProgress.vue';
import AIcon from '@atoms/AIcon.vue';
import { useSkillsStore, useDarkMode, store } from '@/stores';

export default defineComponent({
  name: 'OSkills',
  components: {
    AColumns,
    AColumn,
    MBoxWithTag,
    ATag,
    AProgress,
    MTags,
    AIcon,
  },
  setup() {
    const { hardSkills, softSkills } = useSkillsStore(store);
    const isDark = useDarkMode();

    return { hardSkills, softSkills, isDark };
  },
});
</script>

<style scoped></style>
