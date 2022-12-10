<!-- eslint-disable vue/no-v-html -->
<template>
  <MoleculeBoxWithTitle :title="title">
    <p class="is-size-5" v-html="textWithLink"></p>
  </MoleculeBoxWithTitle>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { MoleculeBoxWithTitle } from '@/components/molecules';
import type { Linkage } from '@/types';

export default defineComponent({
  name: 'OrganismProfile',
  components: {
    MoleculeBoxWithTitle,
  },
  props: {
    title: {
      type: String,
      default: 'Profile',
    },
    text: {
      type: String,
      required: true,
    },
    linkage: {
      type: Object as PropType<Linkage>,
      default: () => ({}),
    },
  },
  computed: {
    textWithLink(): string {
      const { title, href } = this.linkage;
      return this.text.replace(
        title,
        '<a href="' +
          href +
          '" class="has-text-weight-semibold">' +
          title +
          '</a>'
      );
    },
  },
});
</script>

<style scoped></style>
