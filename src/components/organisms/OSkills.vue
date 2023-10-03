<template>
  <AColumns>
    <AColumn>
      <MBoxWithTag title="My hard skills">
        <AUnorderedList>
          <li
            v-for="{ name, items, rating } of hardSkills"
            :key="name"
            class="block w-full"
          >
            <AColumns class="is-vcentered is-mobile">
              <AColumn class="is-narrow">
                <ATag variant="secondary">{{ name }}</ATag>
              </AColumn>
              <AColumn>
                <AProgress :value="rating[0]" :max="rating[1]" />
              </AColumn>
            </AColumns>
            <div class="tags">
              <ATag v-for="item of items" :key="item">{{ item }}</ATag>
            </div>
          </li>
        </AUnorderedList>
      </MBoxWithTag>
    </AColumn>
    <AColumn class="is-narrow"></AColumn>
    <AColumn>
      <MBoxWithTag title="My soft skills">
        <AUnorderedList>
          <MIconWithTitle
            v-for="{ icon, name } of softSkills"
            :key="name"
            tag="li"
            :icon="icon"
            size="medium"
            :title="name"
            :is-justify-content-center="false"
            has-small-padding
            is-fullwidth
          />
        </AUnorderedList>
      </MBoxWithTag>
    </AColumn>
  </AColumns>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AUnorderedList from '@atoms/AUnorderedList.vue';
import ATag from '@atoms/ATag.vue';
import AProgress from '@atoms/AProgress.vue';
import { useSkillsStore, useUtilStore, store } from '@/stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'OSkills',
  components: {
    AColumns,
    AColumn,
    MBoxWithTag,
    AUnorderedList,
    ATag,
    AProgress,
    MIconWithTitle,
  },
  setup() {
    const { hardSkills, softSkills } = useSkillsStore(store);
    const { isDark } = storeToRefs(useUtilStore(store));

    return { hardSkills, softSkills, isDark };
  },
});
</script>

<style scoped></style>
