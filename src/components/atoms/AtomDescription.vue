<template>
  <component
    :is="isLink ? 'a' : 'span'"
    :href="isLink ? 'https://' + description : null"
  >
    {{ description.replace('www.', '') }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomDescription',
  props: {
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    isLink(): boolean {
      return this.description.includes('www.');
    },
  },
});
</script>

<style scoped></style>
