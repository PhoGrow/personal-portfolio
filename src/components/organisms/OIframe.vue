<template>
  <ATransitionFade>
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
        <ALink :href="src" :title="title" />
      </figcaption>
    </figure>
  </ATransitionFade>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ATransitionFade from '@atoms/ATransitionFade.vue';
import ALink from '@atoms/ALink.vue';
import { useIframeStore, useMobileBreakpoint, store } from '@stores';

export default defineComponent({
  name: 'OIframe',
  components: {
    ATransitionFade,
    ALink,
  },
  setup() {
    const { src, title, caption } = useIframeStore(store);
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
