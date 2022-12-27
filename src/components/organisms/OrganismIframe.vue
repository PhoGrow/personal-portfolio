<template>
  <AtomTransitionFade>
    <figure
      v-show="isLoaded"
      :class="['image', isMobileScreen ? 'is-5by4' : 'is-3by2']"
    >
      <iframe
        :src="src"
        :title="title"
        class="has-ratio"
        @load="isLoaded = true"
      ></iframe>
      <figcaption
        class="has-text-centered is-size-5 has-text-weight-medium mt-2"
      >
        {{ caption.replace(title, '') }}
        <AtomLink :href="src" :title="title" />
      </figcaption>
    </figure>
  </AtomTransitionFade>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomTransitionFade from '@/components/atoms/AtomTransitionFade.vue';
import AtomLink from '@/components/atoms/AtomLink.vue';
import { useIframeStore, useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'OrganismIframe',
  components: {
    AtomTransitionFade,
    AtomLink,
  },
  setup() {
    const { src, title, caption } = useIframeStore();
    const isMobileScreen = useMobileBreakpoint();

    return { src, title, caption, isMobileScreen };
  },
  data() {
    return {
      isLoaded: false,
    };
  },
});
</script>

<style scoped>
figcaption {
  position: absolute;
  width: 100%;
}
</style>
