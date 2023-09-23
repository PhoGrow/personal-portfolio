<template>
  <nav
    class="navbar is-fixed-top has-background-transparent has-backdrop-blur"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container has-border-bottom">
      <div class="navbar-brand is-flex-grow-1">
        <ALink href="#" class="navbar-item mr-auto">
          <ATooltip label="That's me!" position="right">
            <AImage src="favicon.png" :alt="fullName" is-rounded />
          </ATooltip>
        </ALink>
        <ALink
          href="https://github.com/PhoGrow/personal-portfolio"
          class="navbar-item"
        >
          <ATooltip label="Create your own portfolio site">
            <AImage src="logos/github.svg" alt="GitHub" :is-inverted="isDark" />
          </ATooltip>
        </ALink>
        <ALink :href="linkedIn" class="navbar-item">
          <ATooltip label="Contact me!">
            <AImage src="logos/linkedin.svg" alt="LinkedIn" />
          </ATooltip>
        </ALink>
        <div class="navbar-item">
          <ATooltip :label="`${isDark ? 'Light' : 'Dark'} mode`">
            <MButtonWithIcon
              :icon="isDark ? 'dark_mode' : 'light_mode'"
              @click="toggleDark()"
            />
          </ATooltip>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MButtonWithIcon from '@molecules/MButtonWithIcon.vue';
import ALink from '@atoms/ALink.vue';
import ATooltip from '@atoms/ATooltip.vue';
import AImage from '@atoms/AImage.vue';
import { useProfileStore, useDarkMode, store } from '@stores';
import { useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'ONavbar',
  components: {
    ALink,
    ATooltip,
    AImage,
    MButtonWithIcon,
  },
  setup() {
    const { fullName, linkedIn } = useProfileStore(store);
    const isDark = useDarkMode();
    const toggleDark = useToggle(isDark);

    return { fullName, linkedIn, isDark, toggleDark };
  },
});
</script>

<style scoped></style>
