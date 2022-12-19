<template>
  <AtomHero :is-fullheight="isFullheight">
    <AtomHeroHead v-if="hasHeroHead">
      <slot name="header"></slot>
    </AtomHeroHead>
    <AtomHeroBody :class="{ 'px-0': !hasHorizontalPadding }">
      <slot></slot>
    </AtomHeroBody>
  </AtomHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomHero, AtomHeroHead, AtomHeroBody } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculeHero',
  components: {
    AtomHero,
    AtomHeroHead,
    AtomHeroBody,
  },
  props: {
    isFullheight: Boolean,
    hasHeroHead: Boolean,
    hasHorizontalPadding: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
