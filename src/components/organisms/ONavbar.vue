<template>
  <nav
    class="navbar is-fixed-top is-transparent backdrop-blur"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container has-border-bottom">
      <div class="navbar-brand is-flex-grow-1">
        <MNavbarItem
          :link="{ href: '#' }"
          :tooltip="{ label: `That's me!`, position: 'right' }"
          :image="{ src: 'favicon.png', alt: fullName, isRounded: true }"
          class="mr-auto"
        />
        <MNavbarItem
          :link="{ href: 'https://github.com/PhoGrow/personal-portfolio' }"
          :tooltip="{ label: 'Create your own portfolio site' }"
          :image="{
            src: 'logos/github.svg',
            alt: 'GitHub',
            isInverted: isDark,
          }"
        />
        <MNavbarItem
          :link="{ href: linkedIn }"
          :tooltip="{ label: 'Contact me!' }"
          :image="{ src: 'logos/linkedin.svg', alt: 'LinkedIn' }"
        />
        <MNavbarItem :tooltip="{ label: `${isDark ? 'Light' : 'Dark'} mode` }">
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
import {
  useNameStore,
  usePersonalInfoStore,
  useDarkMode,
  store,
} from '@stores';

export default defineComponent({
  name: 'ONavbar',
  components: {
    MNavbarItem,
    ODarkModeButton,
  },
  setup() {
    const { fullName } = useNameStore(store);
    const { info } = usePersonalInfoStore(store);
    const isDark = useDarkMode();

    return { fullName, linkedIn: info.linkedIn, isDark };
  },
});
</script>

<style scoped></style>
