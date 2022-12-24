<template>
  <AtomFooter v-if="isCvVisible" class="has-text-white has-text-centered">
    <AtomSubtitle
      :text="`Made with ♥︎ by ${fullName}`"
      class="has-text-white mb-0"
    />
    <p>Thanks for taking the time!</p>
  </AtomFooter>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomFooter from '@/components/atoms/AtomFooter.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import { useNameStore, useGlobalState } from '@/stores';

export default defineComponent({
  name: 'OrganismFooter',
  components: {
    AtomFooter,
    AtomSubtitle,
  },
  setup() {
    const { fullName } = useNameStore();
    const { isCvVisible } = useGlobalState();

    return { isCvVisible, fullName };
  },
});
</script>

<style scoped></style>
