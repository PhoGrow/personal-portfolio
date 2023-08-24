<template>
  <component :is="tag" v-bind="link" class="navbar-item">
    <ATooltip v-bind="tooltip">
      <slot v-if="Object.keys(image).length === 0"></slot>
      <AImage v-else v-bind="image" />
    </ATooltip>
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { default as ALink, type Link } from '@atoms/ALink.vue';
import { default as ATooltip, type Tooltip } from '@atoms/ATooltip.vue';
import { default as AImage, type Image } from '@atoms/AImage.vue';

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
    image: {
      type: Object as PropType<Image>,
      default: () => ({}),
    },
  },
  computed: {
    tag(): string {
      return Object.keys(this.link).length === 0 ? 'div' : 'ALink';
    },
  },
});
</script>

<style scoped></style>
