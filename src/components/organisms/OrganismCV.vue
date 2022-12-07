<template>
  <AtomHero>
    <slot name="personal-info"></slot>
  </AtomHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomHero } from '@/components';

export default defineComponent({
  name: 'OrganismCV',
  components: {
    AtomHero,
  },
});
</script>

<style scoped></style>
