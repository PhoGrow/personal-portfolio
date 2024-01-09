<template>
  <div class="is-flex is-align-items-center">
    <AIcon icon="emoji_events" :variant="isDark ? 'secondary-dark' : 'white'" />
    <div class="ml-3">
      <p class="is-size-5 has-text-weight-medium">Achievement unlocked</p>
      <p>Learn more about {{ firstName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AIcon from '@atoms/AIcon.vue';
import { useProfileStore, useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

const { firstName } = useProfileStore(store);
const { isDark } = storeToRefs(useUtilStore(store));
</script>

<style scoped></style>
