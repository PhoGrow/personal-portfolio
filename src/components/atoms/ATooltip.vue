<template>
  <AClientOnly>
    <OTooltip
      :label="label"
      :position="position"
      :variant="variant || (isDark ? 'secondary' : 'dark')"
    >
      <slot></slot>
    </OTooltip>
  </AClientOnly>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AClientOnly from '@atoms/AClientOnly.vue';
import { OTooltip } from '@oruga-ui/oruga-next';
import { useDarkMode } from '@stores';

export default defineComponent({
  name: 'ATooltip',
  components: {
    AClientOnly,
    OTooltip,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      default: 'bottom',
      validator(position: string) {
        return ['top', 'bottom', 'left', 'right'].includes(position);
      },
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

<style>
.b-tooltip .tooltip-content {
  font-size: 1rem;
  font-weight: 500;
}

.b-tooltip .tooltip-trigger {
  display: flex;
}
</style>
