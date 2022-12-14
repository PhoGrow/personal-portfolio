<template>
  <AtomBox ref="el" class="pt-0">
    <div class="is-sticky">
      <AtomTitle :text="title" :class="{ 'mb-0': isMobileScreen }" />
      <AtomFullwidthBg
        v-if="isMobileScreen"
        :color="color"
        :is-rounded="top > -boxRadius"
      />
    </div>
    <slot></slot>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AtomBox, AtomFullwidthBg, AtomTitle } from '@/components/atoms';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'MoleculeBoxWithTitle',
  components: {
    AtomBox,
    AtomTitle,
    AtomFullwidthBg,
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
    boxRadius: {
      type: Number,
      default: 32,
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    const el = ref(null);
    const { top } = useElementBounding(el);

    return { isMobileScreen, el, top };
  },
});
</script>

<style scoped>
.is-sticky {
  top: 0;
  z-index: 2;
  padding: 2rem 0;
  background-color: v-bind(color);
}
</style>
