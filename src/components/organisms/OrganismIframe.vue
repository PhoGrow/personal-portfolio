<template>
  <AtomFigure :class="isMobileScreen ? 'is-5by4' : 'is-3by2'">
    <AtomIframe :src="src" :title="title" />
    <AtomFigcaption>
      {{ caption.replace(title, '') }}
      <a :href="src">{{ title }}</a>
    </AtomFigcaption>
  </AtomFigure>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomFigure from '@/components/atoms/AtomFigure.vue';
import AtomIframe from '@/components/atoms/AtomIframe.vue';
import AtomFigcaption from '@/components/atoms/AtomFigcaption.vue';
import { useIframeStore, useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'OrganismIframe',
  components: {
    AtomFigure,
    AtomIframe,
    AtomFigcaption,
  },
  setup() {
    const { src, title, caption } = useIframeStore();
    const isMobileScreen = useMobileBreakpoint();

    return { src, title, caption, isMobileScreen };
  },
});
</script>

<style scoped></style>
