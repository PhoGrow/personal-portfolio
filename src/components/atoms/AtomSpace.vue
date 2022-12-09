<template>
  <div :class="'p' + direction + '-' + value"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomSpace',
  props: {
    direction: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
