<template>
  <AtomFigure :class="[isMobileScreen ? 'is-5by4' : 'is-3by2']">
    <iframe :src="src" :title="title" class="has-ratio"></iframe>
    <figcaption class="has-text-centered is-size-5 has-text-weight-medium mt-2">
      {{ caption.replace(title, '') }}
      <a :href="src">{{ title }}</a>
    </figcaption>
  </AtomFigure>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomFigure } from '@/components';
import { useMobileBreakpoint } from '@/stores';
import type { Iframe } from '@/types';

export default defineComponent({
  name: 'MoleculeIframe',
  components: {
    AtomFigure,
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

<style scoped>
iframe {
  border-radius: 2rem;
}

figcaption {
  position: absolute;
  width: 100%;
}
</style>
