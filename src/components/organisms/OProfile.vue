<template>
  <MBoxWithTitle :title="title">
    <MTextWithLink tag="p" :text="text" :linkage="linkage" class="is-size-5" />
  </MBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MBoxWithTitle from '@molecules/MBoxWithTitle.vue';
import MTextWithLink from '@molecules/MTextWithLink.vue';
import { useProfileStore, store } from '@/stores';

export default defineComponent({
  name: 'OProfile',
  components: {
    MBoxWithTitle,
    MTextWithLink,
  },
  setup() {
    const { title, text, linkage } = useProfileStore(store);
    return { title, text, linkage };
  },
});
</script>

<style scoped></style>
