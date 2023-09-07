<template>
  <div v-show="isCvVisible" :id="cvId" class="pt-6">
    <MHero v-for="name of sections" :key="name" :has-horizontal-padding="false">
      <slot :name="name"></slot>
    </MHero>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MHero from '@molecules/MHero.vue';
import { useCvStore, useGlobalState, store } from '@stores';

export default defineComponent({
  name: 'OCv',
  components: {
    MHero,
  },
  setup() {
    const { sections } = useCvStore(store);
    const { isCvVisible, cvId } = useGlobalState();

    return { sections, isCvVisible, cvId };
  },
});
</script>

<style scoped></style>
