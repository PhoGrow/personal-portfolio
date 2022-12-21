<template>
  <o-field :label="label" :variant="variant" :message="message">
    <slot></slot>
  </o-field>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomField',
  props: {
    label: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped></style>
