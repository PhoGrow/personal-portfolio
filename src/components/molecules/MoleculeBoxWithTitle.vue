<template>
  <AtomBox class="pt-4">
    <AtomExtendBg class="box py-4" :has-background="hasBackground">
      <AtomTitle :text="title" />
    </AtomExtendBg>
    <div class="pt-2">
      <slot></slot>
    </div>
  </AtomBox>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomBox, AtomExtendBg, AtomTitle } from '@/components/atoms';

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
    hasBackground: Boolean,
  },
});
</script>

<style scoped></style>
