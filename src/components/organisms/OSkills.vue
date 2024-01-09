<template>
  <AColumns>
    <AColumn>
      <MBoxWithTag title="My hard skills">
        <AUnorderedList>
          <li
            v-for="{ name, items, rating } of skills.hardSkills"
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
            v-for="{ icon, name } of skills.softSkills"
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

<script setup lang="ts">
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AUnorderedList from '@atoms/AUnorderedList.vue';
import ATag from '@atoms/ATag.vue';
import AProgress from '@atoms/AProgress.vue';
import { useSkillsStore, store } from '@/stores';

const { skills } = useSkillsStore(store);
</script>

<style scoped></style>
