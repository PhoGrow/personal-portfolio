<template>
  <span class="icon">
    <i class="material-icons-round">{{ icon }}</i>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
