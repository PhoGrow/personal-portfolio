<template>
  <span class="icon-text">
    <span>{{ text }}</span>
    <AIcon :icon="icon" />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AIcon from '@atoms/AIcon.vue';

export default defineComponent({
  name: 'MTextWithIcon',
  components: {
    AIcon,
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
