<template>
  <footer v-if="isCvVisible" class="footer has-text-centered">
    <p>Made with ♥︎ by {{ fullName }}</p>
    <p class="heading mb-0">Thanks for taking the time!</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useNameStore, useGlobalState, store } from '@stores';

export default defineComponent({
  name: 'OFooter',
  setup() {
    const { fullName } = useNameStore(store);
    const { isCvVisible } = useGlobalState();

    return { fullName, isCvVisible };
  },
});
</script>

<style scoped></style>
