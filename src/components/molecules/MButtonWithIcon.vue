<template>
  <AButton size="small" is-transparent is-square>
    <AIcon
      :icon="icon"
      size="normal"
      :variant="variant || (isDark ? 'primary' : 'dark')"
    />
  </AButton>
</template>

<script setup lang="ts">
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

withDefaults(
  defineProps<{
    icon: string;
    variant?: string;
  }>(),
  {
    variant: '',
  },
);

const { isDark } = storeToRefs(useUtilStore(store));
</script>

<style scoped></style>
