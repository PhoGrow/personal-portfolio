<template>
  <div class="box pt-4">
    <AtomExtendBg class="box py-4" :has-background="hasBackground">
      <AtomTitle :text="title" />
    </AtomExtendBg>
    <div class="pt-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomExtendBg from '@/components/atoms/AtomExtendBg.vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';

export default defineComponent({
  name: 'MoleculeBoxWithTitle',
  components: {
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
