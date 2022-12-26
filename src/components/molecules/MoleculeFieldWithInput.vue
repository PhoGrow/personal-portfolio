<template>
  <o-field :label="label" :variant="variant" :message="message">
    <o-input
      :placeholder="placeholder"
      :size="size"
      :rounded="isRounded ?? true"
      :status-icon="hasStatusIcon"
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
  data() {
    return {
      ...this.field,
      ...this.input,
    };
  },
});
</script>

<style scoped></style>
