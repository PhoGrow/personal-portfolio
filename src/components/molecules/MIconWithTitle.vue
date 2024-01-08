<template>
  <component
    :is="tag"
    :class="[
      'box is-flex is-align-items-center',
      isMounted ? `has-background-${isDark ? 'dark' : 'white'}` : '',
      `py-${hasSmallPadding ? 4 : 6}`,
      {
        'h-full': isFullheight,
        'w-full': isFullwidth,
        'is-justify-content-center': isJustifyContentCenter,
      },
    ]"
  >
    <AIcon :icon="icon" :size="size" />
    <span class="title ml-3">{{ title }}</span>
  </component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AIcon from '@atoms/AIcon.vue';
import { useUtilStore, store } from '@stores';
import { storeToRefs } from 'pinia';
import { useMounted } from '@vueuse/core';

export default defineComponent({
  name: 'MIconWithTitle',
  components: {
    AIcon,
  },
  props: {
    tag: {
      type: String,
      default: 'section',
    },
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'large',
    },
    title: {
      type: String,
      required: true,
    },
    hasSmallPadding: Boolean,
    isFullheight: Boolean,
    isFullwidth: Boolean,
    isJustifyContentCenter: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const { isDark } = storeToRefs(useUtilStore(store));
    const isMounted = useMounted();

    return { isDark, isMounted };
  },
});
</script>

<style scoped></style>
