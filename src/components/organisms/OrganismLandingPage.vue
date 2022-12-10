<template>
  <AtomHero class="is-fullheight">
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
});
</script>

<style scoped></style>
