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
            <AImage src="favicon.png" :alt="profile.fullName" is-rounded />
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
        <ALink :href="profile.linkedIn" class="navbar-item">
          <ATooltip label="Contact me!">
            <AImage src="logos/linkedin.svg" alt="LinkedIn" />
          </ATooltip>
        </ALink>
        <div class="navbar-item">
          <ATooltip
            :label="`${isDark ? 'Light' : 'Dark'} mode`"
            :position="isMobile ? 'left' : 'bottom'"
          >
            <MButtonWithIcon
              :icon="`${isDark ? 'dark' : 'light'}_mode`"
              @click="toggleDark()"
            />
          </ATooltip>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import MButtonWithIcon from '@molecules/MButtonWithIcon.vue';
import ALink from '@atoms/ALink.vue';
import ATooltip from '@atoms/ATooltip.vue';
import AImage from '@atoms/AImage.vue';
import { useProfileStore, useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useToggle } from '@vueuse/core';

const { profile } = useProfileStore(store);
const { isDark, isMobile } = storeToRefs(useUtilStore(store));
const toggleDark = useToggle(isDark);
</script>

<style scoped></style>
