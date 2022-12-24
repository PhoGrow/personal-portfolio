<template>
  <div class="is-flex is-align-items-center has-text-white">
    <AtomIcon :icon="icon" size="large" />
    <div class="ml-3">
      <AtomSubtitle :text="title" class="mb-0" />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import { useNotificationStore } from '@/stores';

export default defineComponent({
  name: 'OrganismNotification',
  components: {
    AtomIcon,
    AtomSubtitle,
  },
  setup() {
    const { icon, title, description } = useNotificationStore();
    return { icon, title, description };
  },
});
</script>

<style scoped></style>
