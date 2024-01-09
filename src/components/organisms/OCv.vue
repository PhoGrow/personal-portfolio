<template>
  <div v-show="isCvVisible">
    <MHero v-for="name of sections" :key="name" :has-horizontal-padding="false">
      <slot :name="name"></slot>
    </MHero>
  </div>
</template>

<script setup lang="ts">
import MHero from '@molecules/MHero.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

defineProps<{
  sections: string[];
}>();

const { isCvVisible } = storeToRefs(useUtilStore(store));
</script>

<style scoped></style>
