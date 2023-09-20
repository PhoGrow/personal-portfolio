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
            :class="{ 'has-line-clamp-3': !isProfileFullyVisible }"
            v-html="summaryInHtml"
          ></div>
          <AButton
            v-if="!isProfileFullyVisible"
            tag="button"
            size="small"
            variant="secondary"
            class="is-pulled-right"
            @click.once="isProfileExpanded = true"
          >
            Expand
          </AButton>
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
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import AButton from '@atoms/AButton.vue';
import AImage from '@atoms/AImage.vue';
import {
  useNameStore,
  useProfileStore,
  useGlobalState,
  useMobileBreakpoint,
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
  },
  setup() {
    const { fullName } = useNameStore(store);
    const { image, summaryInHtml } = useProfileStore(store);
    const { isCvVisible, cvId } = useGlobalState();
    const isMobile = useMobileBreakpoint();

    return {
      fullName,
      image,
      summaryInHtml,
      isCvVisible,
      cvId,
      isMobile,
      useToast,
    };
  },
  data() {
    return {
      isProfileExpanded: false,
    };
  },
  computed: {
    isProfileFullyVisible(): boolean {
      return this.isProfileExpanded || this.isMobile || this.isCvVisible;
    },
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
