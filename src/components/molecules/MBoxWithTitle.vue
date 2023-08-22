<template>
  <div class="box pt-4">
    <AExtendBg class="box py-4" :has-background="hasBackground">
      <ATitle :text="title" />
    </AExtendBg>
    <div class="pt-2">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AExtendBg from '@atoms/AExtendBg.vue';
import ATitle from '@atoms/ATitle.vue';

export default defineComponent({
  name: 'MBoxWithTitle',
  components: {
    AExtendBg,
    ATitle,
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
