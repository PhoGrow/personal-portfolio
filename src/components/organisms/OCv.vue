<template>
  <MHero
    v-if="isCvVisible"
    :id="href.substring(1)"
    :has-horizontal-padding="hasHorizontalPadding"
  >
    <ATitle :text="title" class="is-1 has-text-centered" />
    <slot name="personal-info"></slot>
    <ASpace value="4" />
    <slot name="profile"></slot>
    <ASpace value="4" />
    <slot name="education"></slot>
    <ASpace value="4" />
    <slot name="skills"></slot>
    <ODownloadButton />
  </MHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ODownloadButton from '@organisms/ODownloadButton.vue';
import MHero from '@molecules/MHero.vue';
import ATitle from '@atoms/ATitle.vue';
import ASpace from '@atoms/ASpace.vue';
import { useWelcomeStore, useGlobalState, store } from '@stores';

export default defineComponent({
  name: 'OCv',
  components: {
    MHero,
    ATitle,
    ASpace,
    ODownloadButton,
  },
  props: {
    hasHorizontalPadding: Boolean,
    title: {
      type: String,
      default: 'CV',
    },
  },
  setup() {
    const { href } = useWelcomeStore(store);
    const { isCvVisible } = useGlobalState();

    return { href, isCvVisible };
  },
});
</script>

<style scoped></style>
