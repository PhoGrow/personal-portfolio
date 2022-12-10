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
import { defineComponent, type PropType } from 'vue';
import { AtomFigure, AtomIframe, AtomFigcaption } from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';
import type { Iframe } from '@/types';

export default defineComponent({
  name: 'MoleculeIframe',
  components: {
    AtomFigure,
    AtomIframe,
    AtomFigcaption,
  },
  props: {
    iframe: {
      type: Object as PropType<Iframe>,
      required: true,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    return { isMobileScreen };
  },
  data() {
    return {
      ...this.iframe,
    };
  },
});
</script>

<style scoped></style>
