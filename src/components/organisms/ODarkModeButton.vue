<template>
  <AButton
    tag="button"
    size="small"
    style="aspect-ratio: 1"
    is-transparent
    @click="toggleDark()"
  >
    <AIcon :icon="isDark ? 'dark_mode' : 'light_mode'" />
  </AButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import { useDarkMode } from '@stores';
import { useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'ODarkModeButton',
  components: {
    AButton,
    AIcon,
  },
  setup() {
    const isDark = useDarkMode();
    const toggleDark = useToggle(isDark);

    return { isDark, toggleDark };
  },
});
</script>

<style scoped></style>
