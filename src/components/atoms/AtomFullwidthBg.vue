<template>
  <div :class="['is-absolute', { 'br-2': isRounded }]"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomFullwidthBg',
  props: {
    color: {
      type: String,
      default: '#fff3c9',
    },
    py: {
      type: String,
      default: '0',
    },
    isRounded: Boolean,
  },
});
</script>

<style scoped>
.is-absolute {
  background-color: v-bind(color);
  width: calc(100% + 4rem);
  left: -2rem;
  top: v-bind(py);
  bottom: v-bind(py);
  z-index: -1;
}
</style>
