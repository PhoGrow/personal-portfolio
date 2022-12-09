<template>
  <p>
    <span class="has-text-weight-semibold mr-2">{{ normalizeProperty() }}</span>
    <a v-if="description.includes('www.')" :href="'https://' + description">
      {{ description.replace('www.', '') }}
    </a>
    <span v-else-if="description === 'Locked'" class="icon-text">
      <span>{{ description }}</span>
      <AtomIcon icon="lock" />
    </span>
    <span v-else>{{ description }}</span>
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
  methods: {
    normalizeProperty(): string {
      let normalizedProperty = (this.property[0] as string).toUpperCase();
      for (let i = 1; i < this.property.length; i++) {
        if (
          this.property[i] === this.property[i]?.toUpperCase() &&
          this.property !== 'linkedIn'
        ) {
          normalizedProperty += ' ' + this.property[i]?.toLowerCase();
        } else {
          normalizedProperty += this.property[i];
        }
      }
      return normalizedProperty;
    },
  },
});
</script>

<style scoped></style>
