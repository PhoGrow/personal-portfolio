<template>
  <div class="box is-relative h-full pt-6">
    <ATag size="large" :variant="isDark ? 'primary' : 'white'" is-absolute>
      {{ capitalizedTitle }}
    </ATag>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import ATag from '@atoms/ATag.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

const props = defineProps<{
  title: string;
}>();

const capitalizedTitle = computed(
  () => props.title.charAt(0).toUpperCase() + props.title.slice(1),
);

const { isDark } = storeToRefs(useUtilStore(store));
</script>

<style scoped></style>
