<template>
  <AColumns class="is-vcentered is-mobile">
    <AColumn class="is-narrow">
      <ATag v-bind="tag">
        <slot></slot>
      </ATag>
    </AColumn>
    <AColumn v-if="Object.keys(progress).length">
      <AProgress v-bind="progress" />
    </AColumn>
  </AColumns>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import AColumns from '@atoms/AColumns.vue';
import AColumn from '@atoms/AColumn.vue';
import { default as ATag, type Tag } from '@atoms/ATag.vue';
import { default as AProgress, type Progress } from '@atoms/AProgress.vue';

export default defineComponent({
  name: 'MTagWithProgress',
  components: {
    AColumns,
    AColumn,
    ATag,
    AProgress,
  },
  props: {
    tag: {
      type: Object as PropType<Tag>,
      default: () => ({}),
    },
    progress: {
      type: Object as PropType<Progress>,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
