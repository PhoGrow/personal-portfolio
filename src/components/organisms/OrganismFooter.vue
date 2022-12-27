<template>
  <footer
    v-if="isCvVisible"
    :class="['footer has-text-centered', { 'has-text-white': !isDark }]"
  >
    <AtomSubtitle
      :text="`Made with ♥︎ by ${fullName}`"
      :class="['mb-0', { 'has-text-white': !isDark }]"
    />
    <p>Thanks for taking the time!</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import { useNameStore, useDarkMode, useGlobalState } from '@/stores';

export default defineComponent({
  name: 'OrganismFooter',
  components: {
    AtomSubtitle,
  },
  setup() {
    const { fullName } = useNameStore();
    const isDark = useDarkMode();
    const { isCvVisible } = useGlobalState();

    return { fullName, isDark, isCvVisible };
  },
});
</script>

<style scoped></style>
