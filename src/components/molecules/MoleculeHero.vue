<template>
  <section :class="['hero', { 'is-fullheight': isFullheight }]">
    <div v-if="hasHeroHead" class="hero-head">
      <slot name="header"></slot>
    </div>
    <div :class="['hero-body', { 'px-0': !hasHorizontalPadding }]">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoleculeHero',
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
