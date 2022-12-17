<template>
  <button class="button is-rounded p-4" @click="toggleDark()">
    <AtomIcon :icon="isDark ? 'dark_mode' : 'light_mode'" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomIcon } from '@/components/atoms';
import { useDark, useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'MoleculeDarkModeButton',
  components: {
    AtomIcon,
  },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return { isDark, toggleDark };
  },
});
</script>

<style scoped>
button {
  background-color: transparent;
  border-color: transparent;
}
</style>
