<template>
  <slot v-if="isMounted"></slot>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AClientOnly',
  data() {
    return {
      isMounted: false,
    };
  },
  mounted() {
    this.isMounted = true;
  },
});
</script>

<style scoped></style>
