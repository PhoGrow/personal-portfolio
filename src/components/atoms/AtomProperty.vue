<template>
  <span class="has-text-weight-semibold mr-2">{{ normalizeProperty() }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomProperty',
  props: {
    property: {
      type: String,
      required: true,
    },
  },
  methods: {
    normalizeProperty(): string {
      const upperCaseLetters = this.property.substring(1).match(/[A-Z]/g);
      const property =
        this.property[0]?.toUpperCase() + this.property.substring(1);
      if (this.property === 'linkedIn' || !upperCaseLetters?.length) {
        return property;
      }
      return property.replace(
        upperCaseLetters[0],
        ' ' + upperCaseLetters[0].toLowerCase()
      );
    },
  },
});
</script>

<style scoped></style>
