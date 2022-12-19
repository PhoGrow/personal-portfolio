<template>
  <AtomFooter class="has-text-white has-text-centered">
    <AtomSubtitle
      :text="`Made with ♥︎ by ${name}`"
      class="has-text-white mb-0"
    />
    <p>Thanks for taking the time!</p>
  </AtomFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomFooter, AtomSubtitle } from '@/components/atoms';

export default defineComponent({
  name: 'OrganismFooter',
  components: {
    AtomFooter,
    AtomSubtitle,
  },
  props: {
    name: {
      type: String,
      default: 'Rene Dietz',
    },
  },
});
</script>

<style scoped></style>
