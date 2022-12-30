<template>
  <o-field
    :label="field.label"
    :variant="field.variant"
    :message="field.message"
  >
    <o-input
      :placeholder="input.placeholder"
      :size="input.size"
      :rounded="input.isRounded ?? true"
      :status-icon="input.hasStatusIcon"
      @update:model-value="(value: string) => $emit('input', value)"
    ></o-input>
  </o-field>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Field, Input } from '@/types';

export default defineComponent({
  name: 'MoleculeFieldWithInput',
  props: {
    field: {
      type: Object as PropType<Field>,
      required: true,
    },
    input: {
      type: Object as PropType<Input>,
      required: true,
    },
  },
  emits: ['input'],
});
</script>

<style scoped></style>
