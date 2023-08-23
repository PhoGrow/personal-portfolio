<template>
  <nav
    class="navbar is-fixed-top is-transparent backdrop-blur"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container has-border-bottom">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <ATooltip
            label="That's me"
            :variant="isDark ? 'secondary' : 'dark'"
            position="right"
          >
            <img class="is-rounded" src="favicon.png" :alt="fullName" />
          </ATooltip>
        </a>
        <div class="navbar-item">
          <ODarkModeButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ODarkModeButton from '@organisms/ODarkModeButton.vue';
import ATooltip from '@atoms/ATooltip.vue';
import { useNameStore, useDarkMode, store } from '@stores';

export default defineComponent({
  name: 'ONavbar',
  components: {
    ATooltip,
    ODarkModeButton,
  },
  setup() {
    const { fullName } = useNameStore(store);
    const isDark = useDarkMode();

    return { fullName, isDark };
  },
});
</script>

<style scoped>
.navbar-brand {
  flex-grow: 1;
  justify-content: space-between;
}
</style>
