<template>
  <nav
    class="navbar is-fixed-top has-background-transparent backdrop-blur"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container has-border-bottom">
      <div class="navbar-brand is-flex-grow-1">
        <MNavbarItem
          v-for="(item, index) of navbarItems"
          :key="item.tooltip.label"
          v-bind="item"
          :class="{ 'mr-auto': index === 0 }"
        >
          <ODarkModeButton />
        </MNavbarItem>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ODarkModeButton from '@organisms/ODarkModeButton.vue';
import MNavbarItem from '@molecules/MNavbarItem.vue';
import { useNavbarItemsStore, store } from '@stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'ONavbar',
  components: {
    MNavbarItem,
    ODarkModeButton,
  },
  setup() {
    const { navbarItems } = storeToRefs(useNavbarItemsStore(store));
    return { navbarItems };
  },
});
</script>

<style scoped></style>
