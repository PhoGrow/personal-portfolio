<template>
  <div :class="`tags are-${options.size}`">
    <ATag v-for="tag of tags" :key="tag" v-bind="options">{{ tag }}</ATag>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { default as ATag, type Tag } from '@atoms/ATag.vue';

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
    options: {
      type: Object as PropType<Tag>,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
