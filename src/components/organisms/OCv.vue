<template>
  <div v-show="isCvVisible">
    <MHero v-for="name of sections" :key="name" :has-horizontal-padding="false">
      <slot :name="name"></slot>
    </MHero>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import MHero from '@molecules/MHero.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

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
    const { isCvVisible } = storeToRefs(useUtilStore(store));
    return { isCvVisible };
  },
});
</script>

<style scoped></style>
