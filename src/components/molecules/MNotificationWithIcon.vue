<template>
  <div
    :class="`notification has-background-${variant} is-flex is-align-items-center`"
  >
    <AIcon v-if="icon" :icon="icon" size="medium" variant="dark" />
    <span :class="['subtitle has-text-weight-medium', { 'ml-3': icon }]">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import AIcon from '@atoms/AIcon.vue';

defineProps<{
  variant: string;
  icon?: string;
}>();
</script>

<style scoped></style>
