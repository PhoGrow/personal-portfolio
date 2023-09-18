<!-- eslint-disable vue/no-v-html -->
<template>
  <MBoxWithTag title="My education">
    <AColumns>
      <AColumn class="is-6">
        <OCarousel
          v-model="carouselItemNumber"
          class="h-full"
          :interval="15000"
          :arrow="false"
          repeat
          autoplay
          indicator-inside
        >
          <OCarouselItem
            v-for="{ topic } of educationStore.$state"
            :key="topic"
          >
            <section
              :class="[
                'box is-flex is-align-items-center is-justify-content-center h-full py-6',
                `has-background-${isDark ? 'dark' : 'white'}`,
              ]"
            >
              <AIcon
                icon="school"
                size="large"
                :variant="isDark ? 'secondary' : 'dark'"
              />
              <p class="title ml-3">{{ topic }}</p>
            </section>
          </OCarouselItem>
        </OCarousel>
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <AColumn>
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
            :class="{ 'mb-3': i !== getEducationItem('activities').length - 1 }"
          >
            <span class="has-text-weight-medium mr-2">{{ name }}</span>
            <span
              v-html="educationStore.descriptionInHtml(descriptionInMd).value"
            ></span>
          </li>
        </ul>
      </AColumn>
    </AColumns>
  </MBoxWithTag>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTag from '@molecules/MBoxWithTag.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AIcon from '@atoms/AIcon.vue';
import { OCarousel, OCarouselItem } from '@oruga-ui/oruga-next';
import { useEducationStore, useDarkMode, store, type Education } from '@stores';

export default defineComponent({
  name: 'OEducation',
  components: {
    MBoxWithTag,
    AColumns,
    AColumn,
    OCarousel,
    OCarouselItem,
    AIcon,
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
  },
});
</script>

<style scoped>
:deep(.carousel .carousel-scene) {
  height: 100%;
}

:deep(.carousel .carousel-scene .carousel-items) {
  height: 100%;
}

:deep(span > p) {
  display: inline !important;
}
</style>
