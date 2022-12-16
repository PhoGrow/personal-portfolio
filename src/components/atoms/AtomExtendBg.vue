<template>
  <div :class="{ 'is-extended': isExtended }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomExtendBg',
  props: {
    isExtended: Boolean,
    margin: {
      type: String,
      default: '-2rem',
    },
  },
  computed: {
    padding(): string {
      return this.margin.replace('-', '');
    },
  },
});
</script>

<style scoped>
.is-extended {
  margin: 0 v-bind(margin);
  padding: 0 v-bind(padding);
}
</style>
