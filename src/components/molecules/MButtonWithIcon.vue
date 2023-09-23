<template>
  <AButton size="small" is-transparent is-square>
    <AIcon
      :icon="icon"
      size="normal"
      :variant="variant || (isDark ? 'primary' : 'dark')"
    />
  </AButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'MButtonWithIcon',
  components: {
    AButton,
    AIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: '',
    },
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
