<template>
  <AtomNavbar>
    <AtomNavbarBrand>
      <AtomNavbarItem>
        <AtomImage src="favicon.svg" :alt="fullName" />
      </AtomNavbarItem>
      <AtomNavbarItem>
        <OrganismDarkModeButton />
      </AtomNavbarItem>
    </AtomNavbarBrand>
  </AtomNavbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OrganismDarkModeButton from '@/components/organisms/OrganismDarkModeButton.vue';
import AtomNavbar from '@/components/atoms/AtomNavbar.vue';
import AtomNavbarBrand from '@/components/atoms/AtomNavbarBrand.vue';
import AtomNavbarItem from '@/components/atoms/AtomNavbarItem.vue';
import AtomImage from '@/components/atoms/AtomImage.vue';
import { useNameStore } from '@/stores';

export default defineComponent({
  name: 'OrganismNavbar',
  components: {
    AtomNavbar,
    AtomNavbarBrand,
    AtomNavbarItem,
    AtomImage,
    OrganismDarkModeButton,
  },
  setup() {
    const { fullName } = useNameStore();
    return { fullName };
  },
});
</script>

<style scoped></style>
