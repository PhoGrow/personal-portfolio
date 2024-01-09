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

<script setup lang="ts">
withDefaults(
  defineProps<{
    isFullheight?: boolean;
    isFullheightWithNavbar?: boolean;
    hasHeroHeader?: boolean;
    hasHeroFooter?: boolean;
    hasHorizontalPadding?: boolean;
  }>(),
  {
    hasHorizontalPadding: true,
  },
);
</script>

<style scoped></style>
