<!-- eslint-disable vue/no-v-html -->
<template>
  <MBoxWithTag title="My education">
    <AColumns>
      <AColumn class="is-6">
        <MCarousel
          :total-item-number="educationStore.$state.length"
          @change="(itemNumber) => (carouselItemNumber = itemNumber)"
        >
          <MIconWithTitle
            class="h-full"
            icon="school"
            :title="getEducationItem('topic') as string"
          />
        </MCarousel>
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <ATransitionFade>
        <AColumn :key="carouselItemNumber">
          <div class="block">
            <p class="heading">{{ getEducationItem('period') }}</p>
            <p>
              <span class="title is-5 mr-2">{{
                getEducationItem('degree')
              }}</span>
              <span class="has-text-grey">{{ getEducationItem('gpa') }}</span>
            </p>
            <p>
              <span class="mr-2">{{ getEducationItem('university') }}</span>
              <span class="has-text-grey">{{
                getEducationItem('location')
              }}</span>
            </p>
          </div>
          <ul>
            <li
              v-for="({ name, descriptionInMd }, i) of getEducationItem(
                'activities',
              ) as {
                name: string;
                descriptionInMd: string;
              }[]"
              :key="name"
              :class="{
                'mb-3': i !== getEducationItem('activities').length - 1,
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

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import MCarousel from '@molecules/MCarousel.vue';
import MIconWithTitle from '@molecules/MIconWithTitle.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import ATransitionFade from '@atoms/ATransitionFade.vue';
import { useEducationStore, useDarkMode, useMdToHtml, store } from '@stores';
import type { Education } from '@stores';

export default defineComponent({
  name: 'OEducation',
  components: {
    MBoxWithTag,
    AColumns,
    AColumn,
    MCarousel,
    MIconWithTitle,
    ATransitionFade,
  },
  setup() {
    const educationStore = useEducationStore(store);
    const isDark = useDarkMode();

    return { educationStore, isDark };
  },
  data() {
    return {
      carouselItemNumber: 0,
    };
  },
  methods: {
    getEducationItem(key: keyof Education) {
      return this.educationStore[this.carouselItemNumber]![key];
    },
    mdToHtml(md: string): string {
      const { html } = useMdToHtml(md);
      return html.value;
    },
  },
});
</script>

<style scoped>
:deep(span > p) {
  display: inline !important;
}
</style>
