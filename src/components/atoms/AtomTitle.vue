<template>
  <h1 class="title">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
