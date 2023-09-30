<template>
  <div v-show="isCvVisible" :id="cvId">
    <MHero v-for="name of sections" :key="name" :has-horizontal-padding="false">
      <slot :name="name"></slot>
    </MHero>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import MHero from '@molecules/MHero.vue';
import { useGlobalState } from '@stores';

export default defineComponent({
  name: 'OCv',
  components: {
    MHero,
  },
  props: {
    sections: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup() {
    const { isCvVisible, cvId } = useGlobalState();
    return { isCvVisible, cvId };
  },
});
</script>

<style scoped></style>
