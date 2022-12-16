<template>
  <AtomBox ref="el" class="pt-4">
    <AtomExtendBg
      :is-extended="isMobileScreen"
      :class="[
        'is-sticky has-background-yellow-light py-4',
        { 'is-rounded': top > -boxRadiusInPx },
      ]"
    >
      <AtomTitle :text="title" />
    </AtomExtendBg>
    <div class="pt-2">
      <slot></slot>
    </div>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AtomBox, AtomExtendBg, AtomTitle } from '@/components/atoms';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint } from '@/stores';

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
    boxRadius: {
      type: String,
      default: '2rem',
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
      const boxRadiusInRem = parseInt(this.boxRadius.replace('rem', ''));
      const rootFontSize = parseInt(
        getComputedStyle(document.documentElement).fontSize
      );
      return boxRadiusInRem * rootFontSize;
    },
  },
});
</script>

<style scoped>
.is-rounded {
  border-radius: v-bind(boxRadius);
}
</style>
