<template>
  <o-tooltip :label="label" :position="position" :variant="variant">
    <slot></slot>
  </o-tooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomTooltip',
  props: {
    label: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'left',
    },
    variant: {
      type: String,
      default: 'dark',
    },
    fontSize: {
      type: String,
      default: '1rem',
    },
    fontWeight: {
      type: Number,
      default: 500,
    },
  },
});
</script>

<style>
.b-tooltip .tooltip-content {
  font-size: v-bind(fontSize);
  font-weight: v-bind(fontWeight);
}
</style>
