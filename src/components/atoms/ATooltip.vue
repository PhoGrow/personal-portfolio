<template>
  <OTooltip
    :label="isMounted ? label : ''"
    :position="position"
    :variant="isMounted ? variant || (isDark ? 'secondary' : 'dark') : ''"
  >
    <slot></slot>
  </OTooltip>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { OTooltip } from '@oruga-ui/oruga-next';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

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
    const { isDark } = storeToRefs(useUtilStore(store));
    const isMounted = useMounted();

    return { isDark, isMounted };
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
