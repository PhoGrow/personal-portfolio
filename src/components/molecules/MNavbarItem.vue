<template>
  <component
    :is="link.href ? 'ALink' : 'div'"
    v-bind="link"
    class="navbar-item"
  >
    <ATooltip v-bind="tooltip">
      <slot v-if="Object.keys(content).length === 0"></slot>
      <component :is="'AImage'" v-else v-bind="content" />
    </ATooltip>
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import ALink from '@atoms/ALink.vue';
import ATooltip from '@atoms/ATooltip.vue';
import AImage from '@atoms/AImage.vue';
import type { Link, Tooltip, Image } from '@stores';

export default defineComponent({
  name: 'MNavbarItem',
  components: {
    ALink,
    ATooltip,
    AImage,
  },
  props: {
    link: {
      type: Object as PropType<Link>,
      default: () => ({}),
    },
    tooltip: {
      type: Object as PropType<Tooltip>,
      required: true,
    },
    content: {
      type: Object as PropType<Image>,
      default: () => ({}),
    },
  },
});
</script>

<style scoped></style>
