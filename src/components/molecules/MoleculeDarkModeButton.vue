<template>
  <AtomButton size="normal" class="p-4" is-transparent @click="toggleDark()">
    <AtomIcon :icon="isDark ? 'dark_mode' : 'light_mode'" />
  </AtomButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomButton, AtomIcon } from '@/components/atoms';
import { useDark, useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'MoleculeDarkModeButton',
  components: {
    AtomButton,
    AtomIcon,
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return { isDark, toggleDark };
  },
});
</script>

<style scoped></style>
