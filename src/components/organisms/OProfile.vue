<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-html="summaryInHtml"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useProfileStore, store } from '@stores';

export default defineComponent({
  name: 'OProfile',
  setup() {
    const { summaryInHtml } = useProfileStore(store);
    return { summaryInHtml };
  },
});
</script>

<style scoped></style>
