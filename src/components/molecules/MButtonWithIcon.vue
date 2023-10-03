<template>
  <AButton size="small" is-transparent is-square>
    <AIcon
      :icon="icon"
      size="normal"
      :variant="variant || (isDark ? 'primary' : 'dark')"
    />
  </AButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';

export default defineComponent({
  name: 'MButtonWithIcon',
  components: {
    AButton,
    AIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: '',
    },
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    return { isDark };
  },
});
</script>

<style scoped></style>
