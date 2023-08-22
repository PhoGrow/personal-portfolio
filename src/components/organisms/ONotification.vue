<template>
  <div
    :class="['is-flex is-align-items-center', { 'has-text-white': !isDark }]"
  >
    <AIcon :icon="icon" size="large" />
    <div class="ml-3">
      <ASubtitle
        :text="title"
        :class="['mb-0', { 'has-text-secondary-dark': isDark }]"
      />
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AIcon from '@atoms/AIcon.vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import { useNotificationStore, useDarkMode, store } from '@stores';

export default defineComponent({
  name: 'ONotification',
  components: {
    AIcon,
    ASubtitle,
  },
  setup() {
    const { icon, title, description } = useNotificationStore(store);
    const isDark = useDarkMode();

    return { icon, title, description, isDark };
  },
});
</script>

<style scoped></style>
