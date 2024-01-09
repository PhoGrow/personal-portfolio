<!-- eslint-disable vue/no-v-html -->
<template>
  <MBoxWithTag title="My education">
    <AColumns>
      <AColumn class="is-6">
        <MCarousel
          :total-item-number="education.length"
          @change="(itemNumber) => (carouselItemNumber = itemNumber)"
        >
          <MIconWithTitle
            icon="school"
            :title="currentEducationItem.topic"
            is-fullheight
          />
        </MCarousel>
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <ATransitionFade>
        <AColumn :key="carouselItemNumber">
          <div class="block">
            <p class="heading">
              {{ currentEducationItem.period[0] }} –
              {{ currentEducationItem.period[1] }}
            </p>
            <p>
              <span class="title is-5 mr-2">
                {{ currentEducationItem.degree[0] }}
                {{ currentEducationItem.degree[1] }}
              </span>
              <span class="has-text-grey">Ø{{ currentEducationItem.gpa }}</span>
            </p>
            <p>
              <span class="mr-2">{{ currentEducationItem.university }}</span>
              <span class="has-text-grey">
                {{ currentEducationItem.location[0] }},
                {{ currentEducationItem.location[1] }}
              </span>
            </p>
          </div>
          <ul>
            <li
              v-for="(
                { name, descriptionInMd }, i
              ) of currentEducationItem.activities"
              :key="name"
              :class="{
                'mb-3': i !== currentEducationItem.activities.length - 1,
              }"
            >
              <span class="has-text-weight-medium mr-2">{{ name }}</span>
              <span v-html="mdToHtml(descriptionInMd)"></span>
            </li>
          </ul>
        </AColumn>
      </ATransitionFade>
    </AColumns>
  </MBoxWithTag>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MCarousel from '@molecules/MCarousel.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import ATransitionFade from '@atoms/ATransitionFade.vue';
import { useEducationStore, useMdToHtml, store } from '@stores';

const { education } = useEducationStore(store);

const carouselItemNumber = ref(0);
const currentEducationItem = computed(
  () => education[carouselItemNumber.value]!,
);

function mdToHtml(md: string): string {
  const { html } = useMdToHtml(md);
  return html.value;
}
</script>

<style scoped>
:deep(span > p) {
  display: inline !important;
}
</style>
