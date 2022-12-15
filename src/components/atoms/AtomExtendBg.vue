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
    color: {
      type: String,
      default: 'transparent',
    },
    padding: {
      type: String,
      default: '0',
    },
    borderRadius: {
      type: String,
      default: '0',
    },
  },
  computed: {
    paddingLeft(): string {
      return this.margin.replace('-', '');
    },
  },
});
</script>

<style scoped>
div {
  background-color: v-bind(color);
  padding-top: v-bind(padding);
  padding-bottom: v-bind(padding);
  border-radius: v-bind(borderRadius);
}

.is-extended {
  margin: 0 v-bind(margin);
  padding-left: v-bind(paddingLeft);
}
</style>
