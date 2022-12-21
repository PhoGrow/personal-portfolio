<template>
  <o-input
    :placeholder="placeholder"
    :size="size"
    :rounded="isRounded"
    :status-icon="hasStatusIcon"
    @update:model-value="(value: string) => $emit('input', value)"
  ></o-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomInput',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'normal',
    },
    isRounded: {
      type: Boolean,
      default: true,
    },
    hasStatusIcon: Boolean,
  },
  emits: ['input'],
});
</script>

<style scoped></style>
