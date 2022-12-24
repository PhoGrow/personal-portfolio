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
import AtomHero from '@/components/atoms/AtomHero.vue';
import AtomHeroHead from '@/components/atoms/AtomHeroHead.vue';
import AtomHeroBody from '@/components/atoms/AtomHeroBody.vue';

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
