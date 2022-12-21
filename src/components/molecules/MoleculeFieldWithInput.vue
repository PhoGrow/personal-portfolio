<template>
  <AtomField v-bind="field">
    <AtomInput
      v-bind="input"
      @input="(value: string) => $emit('input', value)"
    />
  </AtomField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { AtomField, AtomInput } from '@/components/atoms';
import type { Field, Input } from '@/types';

export default defineComponent({
  name: 'MoleculeFieldWithInput',
  components: {
    AtomField,
    AtomInput,
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
