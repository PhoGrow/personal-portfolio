<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container has-border-bottom">
      <div class="navbar-brand">
        <div class="navbar-item">
          <img src="/favicon.svg" :alt="fullName" />
        </div>
        <div class="navbar-item">
          <OrganismDarkModeButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrganismDarkModeButton from '@organisms/ODarkModeButton.vue';
import { useNameStore, store } from '@/stores';

export default defineComponent({
  name: 'ONavbar',
  components: {
    OrganismDarkModeButton,
  },
  setup() {
    const { fullName } = useNameStore(store);
    return { fullName };
  },
});
</script>

<style scoped>
.navbar-brand {
  flex-grow: 1;
  justify-content: space-between;
}
</style>
