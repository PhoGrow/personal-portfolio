<template>
  <p>
    <span class="has-text-weight-semibold mr-2">{{ property }}</span>
    <a v-if="description.includes('www')" :href="'https://' + description">
      {{ description }}
    </a>
    <span v-else class="icon-text">
      <span>{{ description }}</span>
      <AtomIcon v-if="description === 'Censored'" icon="lock" />
    </span>
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';

export default defineComponent({
  name: 'MoleculePersonalInfo',
  components: {
    AtomIcon,
  },
  props: {
    property: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
