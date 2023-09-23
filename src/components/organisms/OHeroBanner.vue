<!-- eslint-disable vue/no-v-html -->
<template>
  <MHero is-fullheight-with-navbar>
    <AColumns class="is-vcentered is-flex-direction-row-reverse">
      <AColumn>
        <AImage :src="image.src" :alt="image.alt" />
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <AColumn class="content is-medium">
        <h1>Hi, I'm {{ fullName }}.</h1>
        <div class="block">
          <div
            v-for="[device, lineClamp] of [
              ['mobile', 3],
              ['tablet', 6],
            ] as [string, number][]"
            :key="device"
            :class="[
              `is-hidden-${device}`,
              !(isProfileExpanded || isCvVisible)
                ? `has-line-clamp-${lineClamp}`
                : '',
            ]"
            v-html="summaryInHtml"
          ></div>
          <MButtonWithIcon
            v-if="!(isProfileExpanded || isCvVisible)"
            icon="expand_circle_down"
            :variant="isDark ? 'secondary' : 'dark'"
            is-pulled-right
            @click.once="isProfileExpanded = true"
          />
        </div>
        <AButton :href="`#${cvId}`" @click.once="showCv">
          Get to know me
        </AButton>
      </AColumn>
    </AColumns>
  </MHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MHero from '@molecules/MHero.vue';
import MButtonWithIcon from '@molecules/MButtonWithIcon.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AButton from '@atoms/AButton.vue';
import AImage from '@atoms/AImage.vue';
import {
  useProfileStore,
  useGlobalState,
  useDarkMode,
  useToast,
  store,
} from '@stores';
import confetti from 'canvas-confetti';

export default defineComponent({
  name: 'OHeroBanner',
  components: {
    MHero,
    AColumns,
    AColumn,
    AButton,
    AImage,
    MButtonWithIcon,
  },
  setup() {
    const { fullName, image, summaryInHtml } = useProfileStore(store);
    const { isCvVisible, cvId } = useGlobalState();
    const isDark = useDarkMode();

    return {
      fullName,
      image,
      summaryInHtml,
      isCvVisible,
      cvId,
      isDark,
      useToast,
    };
  },
  data() {
    return {
      isProfileExpanded: false,
    };
  },
  methods: {
    async showCv() {
      this.isCvVisible = true;
      this.useToast();
      await confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.8 },
        disableForReducedMotion: true,
      });
    },
  },
});
</script>

<style scoped></style>
