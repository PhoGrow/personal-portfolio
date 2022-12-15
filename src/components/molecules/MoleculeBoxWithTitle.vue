<template>
  <AtomBox ref="el" class="pt-0">
    <AtomExtendBg
      :is-extended="isMobileScreen"
      :color="color"
      :padding="`${boxRadiusInRem}rem`"
      :border-radius="top > -boxRadiusInPx ? `${boxRadiusInRem}rem` : `0`"
      class="is-sticky"
    >
      <AtomTitle :text="title" />
    </AtomExtendBg>
    <slot></slot>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AtomBox, AtomExtendBg, AtomTitle } from '@/components/atoms';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint, rootFontSize } from '@/stores';

export default defineComponent({
  name: 'MoleculeBoxWithTitle',
  components: {
    AtomBox,
    AtomExtendBg,
    AtomTitle,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#fffaeb',
    },
    boxRadiusInRem: {
      type: Number,
      default: 2,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    const el = ref(null);
    const { top } = useElementBounding(el);

    return { isMobileScreen, el, top };
  },
  computed: {
    boxRadiusInPx(): number {
      return this.boxRadiusInRem * rootFontSize;
    },
  },
});
</script>

<style scoped></style>
