<template>
  <AtomNavbar>
    <AtomNavbarBrand>
      <AtomNavbarItem>
        <AtomImage :src="logo.src" :alt="logo.alt" />
      </AtomNavbarItem>
      <AtomNavbarItem>
        <MoleculeDarkModeButton />
      </AtomNavbarItem>
    </AtomNavbarBrand>
  </AtomNavbar>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { MoleculeDarkModeButton } from '@/components/molecules';
import {
  AtomNavbar,
  AtomNavbarBrand,
  AtomNavbarItem,
  AtomImage,
} from '@/components/atoms';
import type { Image } from '@/types';

export default defineComponent({
  name: 'OrganismNavbar',
  components: {
    AtomNavbar,
    AtomNavbarBrand,
    AtomNavbarItem,
    AtomImage,
    MoleculeDarkModeButton,
  },
  props: {
    logo: {
      type: Object as PropType<Image>,
      default: () => ({ src: '/favicon.svg', alt: 'Rene Dietz' }),
    },
  },
});
</script>

<style scoped></style>
