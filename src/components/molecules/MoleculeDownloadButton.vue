<template>
  <AtomButton
    tag="button"
    size="large"
    class="is-fixed has-background-orange p-5"
  >
    <AtomIcon :icon="icon" size="medium" />
  </AtomButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomButton, AtomIcon } from '@/components/atoms';
import { useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'MoleculeDownloadButton',
  components: {
    AtomButton,
    AtomIcon,
  },
  props: {
    icon: {
      type: String,
      default: 'download',
    },
  },
  setup() {
    const isMobileScreen = useMobileBreakpoint();
    return { isMobileScreen };
  },
  computed: {
    right(): string {
      return `${this.isMobileScreen ? 1 : 4}rem`;
    },
    bottom(): string {
      return `${this.isMobileScreen ? 3 : 4}rem`;
    },
  },
});
</script>

<style scoped>
.is-fixed {
  position: fixed;
  right: v-bind(right);
  bottom: v-bind(bottom);
}
</style>
