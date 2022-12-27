<template>
  <div
    :class="['is-flex is-align-items-center', { 'has-text-white': !isDark }]"
  >
    <AtomIcon :icon="icon" size="large" />
    <div class="ml-3">
      <AtomSubtitle
        :text="title"
        :class="['mb-0', { 'has-text-secondary-dark': isDark }]"
      />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import { useNotificationStore, useDarkMode } from '@/stores';

export default defineComponent({
  name: 'OrganismNotification',
  components: {
    AtomIcon,
    AtomSubtitle,
  },
  setup() {
    const { icon, title, description } = useNotificationStore();
    const isDark = useDarkMode();

    return { icon, title, description, isDark };
  },
});
</script>

<style scoped></style>
