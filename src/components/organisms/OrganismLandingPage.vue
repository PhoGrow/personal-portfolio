<template>
  <AtomHero class="is-fullheight" :has-hero-head="hasNavbar">
    <template #header>
      <slot name="navbar"></slot>
    </template>
    <AtomColumns class="is-vcentered">
      <AtomColumn>
        <slot name="welcome"></slot>
      </AtomColumn>
      <AtomColumn class="is-narrow"></AtomColumn>
      <AtomColumn>
        <slot name="work"></slot>
      </AtomColumn>
    </AtomColumns>
  </AtomHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomHero, AtomColumns, AtomColumn } from '@/components/atoms';

export default defineComponent({
  name: 'LandingPage',
  components: {
    AtomHero,
    AtomColumns,
    AtomColumn,
  },
  props: {
    hasNavbar: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped></style>
