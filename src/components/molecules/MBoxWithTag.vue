<template>
  <div class="box is-relative h-full pt-6">
    <ATag size="large" :variant="isDark ? 'primary' : 'white'" is-absolute>
      {{ capitalizedTitle }}
    </ATag>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ATag from '@atoms/ATag.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MBoxWithTag',
  components: {
    ATag,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    return { isDark };
  },
  computed: {
    capitalizedTitle(): string {
      return this.title.charAt(0).toUpperCase() + this.title.slice(1);
    },
  },
});
</script>

<style scoped></style>
