<template>
  <FullheightHero>
    <AtomColumns class="is-vcentered">
      <AtomColumn>
        <AtomTitle class="is-1 is-spaced">{{ title }}</AtomTitle>
        <AtomSubtitle class="is-3">{{ subtitle }}</AtomSubtitle>
        <ButtonItem :href="href">{{ callToAction }}</ButtonItem>
      </AtomColumn>
      <AtomColumn class="is-narrow"></AtomColumn>
      <AtomColumn>
        <IframeItem src="https://phogrow3d.com" title="PhoGrow">
          Work in progress at
          <a href="https://phogrow3d.com">PhoGrow</a>
        </IframeItem>
      </AtomColumn>
    </AtomColumns>
  </FullheightHero>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import {
  AtomColumn,
  AtomColumns,
  FullheightHero,
  AtomTitle,
  AtomSubtitle,
  ButtonItem,
  IframeItem,
} from '@/components';
import type { Introduction } from '@/types';

export default defineComponent({
  name: 'LandingPage',
  components: {
    AtomColumn,
    AtomColumns,
    FullheightHero,
    AtomTitle,
    AtomSubtitle,
    ButtonItem,
    IframeItem,
  },
  props: {
    introduction: {
      type: Object as PropType<Introduction>,
      required: true,
    },
  },
  data() {
    return {
      ...this.introduction,
    };
  },
});
</script>

<style scoped></style>
