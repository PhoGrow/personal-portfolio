<template>
  <footer
    v-if="isCvVisible"
    :class="['footer has-text-centered', { 'has-text-white': !isDark }]"
  >
    <ASubtitle
      :text="`Made with ♥︎ by ${fullName}`"
      :class="['mb-0', { 'has-text-white': !isDark }]"
    />
    <p>Thanks for taking the time!</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import { useNameStore, useDarkMode, useGlobalState, store } from '@stores';

export default defineComponent({
  name: 'OFooter',
  components: {
    ASubtitle,
  },
  setup() {
    const { fullName } = useNameStore(store);
    const isDark = useDarkMode();
    const { isCvVisible } = useGlobalState();

    return { fullName, isDark, isCvVisible };
  },
});
</script>

<style scoped></style>
