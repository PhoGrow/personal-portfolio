<template>
  <OField
    :label="field.label"
    :variant="field.variant"
    :message="field.message"
  >
    <OInput
      :placeholder="input.placeholder"
      :size="input.size"
      :rounded="input.isRounded ?? true"
      :status-icon="input.hasStatusIcon"
      @update:model-value="(value: string) => $emit('input', value)"
    ></OInput>
  </OField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { OField, OInput } from '@oruga-ui/oruga-next';
import type { Field, Input } from '@stores';

export default defineComponent({
  name: 'MFieldWithInput',
  components: {
    OField,
    OInput,
  },
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
