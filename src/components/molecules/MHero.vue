<template>
  <section
    :class="[
      'hero',
      {
        'is-fullheight': isFullheight,
        'is-fullheight-with-navbar': isFullheightWithNavbar,
      },
    ]"
  >
    <div v-if="hasHeroHeader" class="hero-head">
      <slot name="header"></slot>
    </div>
    <div :class="['hero-body', { 'px-0': !hasHorizontalPadding }]">
      <div class="container">
        <slot></slot>
      </div>
    </div>
    <div v-if="hasHeroFooter" class="hero-foot">
      <slot name="footer"></slot>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MHero',
  props: {
    isFullheight: Boolean,
    isFullheightWithNavbar: Boolean,
    hasHeroHeader: Boolean,
    hasHeroFooter: Boolean,
    hasHorizontalPadding: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
