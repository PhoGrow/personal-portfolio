<template>
  <MHero :has-hero-head="hasNavbar" is-fullheight>
    <template #header>
      <slot name="navbar"></slot>
    </template>
    <AColumns class="is-vcentered">
      <AColumn>
        <slot name="welcome"></slot>
      </AColumn>
      <AColumn class="is-narrow"></AColumn>
      <AColumn>
        <slot name="work"></slot>
      </AColumn>
    </AColumns>
  </MHero>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MHero from '@molecules/MHero.vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';

export default defineComponent({
  name: 'OLandingPage',
  components: {
    MHero,
    AColumns,
    AColumn,
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
