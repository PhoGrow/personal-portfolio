<template>
  <div class="tags">
    <ATag v-for="tag of tags" :key="tag">{{ tag }}</ATag>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ATag from '@atoms/ATag.vue';

export default defineComponent({
  name: 'MTags',
  components: {
    ATag,
  },
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
