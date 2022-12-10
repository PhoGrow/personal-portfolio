<template>
  <AtomHero :has-horizontal-padding="hasHorizontalPadding">
    <slot name="personal-info"></slot>
    <AtomSpace value="4" />
    <slot name="profile"></slot>
    <AtomSpace value="4" />
    <slot name="education"></slot>
  </AtomHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomHero, AtomSpace } from '@/components/atoms';

export default defineComponent({
  name: 'OrganismCV',
  components: {
    AtomHero,
    AtomSpace,
  },
  props: {
    hasHorizontalPadding: Boolean,
  },
});
</script>

<style scoped></style>
