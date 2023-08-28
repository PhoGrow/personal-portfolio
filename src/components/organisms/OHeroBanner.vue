<!-- eslint-disable vue/no-v-html -->
<template>
  <MHero is-fullheight-with-navbar>
    <AColumns class="is-vcentered is-flex-direction-row-reverse">
      <AColumn>
        <AImage src="building_websites.svg" alt="Building websites" />
        <!-- store: src, alt -->
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <AColumn class="content is-medium">
        <h1>Hi, I'm {{ fullName }}.</h1>
        <div class="block" v-html="summaryInHtml"></div>
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
  useToast,
  store,
} from '@stores';

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
    const { summaryInHtml } = useProfileStore(store);
    const { isCvVisible, cvId } = useGlobalState();

    return { fullName, summaryInHtml, isCvVisible, cvId, useToast };
  },
  methods: {
    showCv() {
      this.isCvVisible = true;
      this.useToast();
    },
  },
});
</script>

<style scoped></style>
