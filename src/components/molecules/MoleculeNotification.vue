<template>
  <div class="is-flex is-align-items-center has-text-white">
    <AtomIcon :icon="icon" size="large" />
    <div class="ml-3">
      <AtomSubtitle :text="title" class="mb-0" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomIcon, AtomSubtitle } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculeNotification',
  components: {
    AtomIcon,
    AtomSubtitle,
  },
  props: {
    icon: {
      type: String,
      default: 'emoji_events',
    },
    title: {
      type: String,
      default: 'Achievement unlocked',
    },
    description: {
      type: String,
      default: `Access Rene's CV`,
    },
  },
});
</script>

<style scoped></style>
