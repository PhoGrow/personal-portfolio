<template>
  <AtomButton size="normal" class="p-4" is-transparent @click="toggleDark()">
    <AtomIcon :icon="isDark ? 'dark_mode' : 'light_mode'" />
  </AtomButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import { useDarkMode } from '@/stores';
import { useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'OrganismDarkModeButton',
  components: {
    AtomButton,
    AtomIcon,
  },
  setup() {
    const isDark = useDarkMode();
    const toggleDark = useToggle(isDark);
    return { isDark, toggleDark };
  },
});
</script>

<style scoped></style>
