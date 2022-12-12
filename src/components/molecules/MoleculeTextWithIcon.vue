<template>
  <span class="icon-text">
    <span>{{ text }}</span>
    <AtomIcon :icon="icon" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomIcon } from '@/components/atoms';

export default defineComponent({
  name: 'MoleculeDescWithIcon',
  components: {
    AtomIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
