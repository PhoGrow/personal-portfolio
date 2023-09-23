<template>
  <div class="box is-relative h-full pt-6">
    <ATag size="large" :variant="isDark ? 'primary' : 'white'" is-absolute>
      {{ title }}
    </ATag>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ATag from '@atoms/ATag.vue';
import { useDarkMode } from '@/stores';

export default defineComponent({
  name: 'MBoxWithTag',
  components: {
    ATag,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isDark = useDarkMode();
    return { isDark };
  },
});
</script>

<style scoped></style>
