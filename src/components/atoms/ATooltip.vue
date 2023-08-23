<template>
  <OTooltip :label="label" :position="position" :variant="variant">
    <slot></slot>
  </OTooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OTooltip } from '@oruga-ui/oruga-next';

export default defineComponent({
  name: 'ATooltip',
  components: {
    OTooltip,
  },
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

.b-tooltip .tooltip-trigger {
  display: flex;
}
</style>
