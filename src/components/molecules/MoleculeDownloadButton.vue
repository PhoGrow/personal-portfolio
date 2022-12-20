<template>
  <AtomTooltip
    :label="label"
    class="is-fixed"
    :style="{ right: tooltipRight, bottom: tooltipBottom }"
  >
    <AtomButton
      ref="el"
      tag="button"
      size="large"
      class="is-fixed has-background-orange p-5"
      :style="{ right: buttonRight, bottom: buttonBottom }"
      @click="showModal"
    >
      <AtomIcon :icon="icon" size="medium" />
    </AtomButton>
  </AtomTooltip>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import { OrganismModal } from '@/components/organisms';
import { AtomTooltip, AtomButton, AtomIcon } from '@/components/atoms';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint } from '@/stores';

export default defineComponent({
  name: 'MoleculeDownloadButton',
  components: {
    AtomTooltip,
    AtomButton,
    AtomIcon,
  },
  props: {
    icon: {
      type: String,
      default: 'download',
    },
    label: {
      type: String,
      default: 'Download CV',
    },
  },
  setup() {
    const el = ref(null);
    const { height, width } = useElementBounding(el);
    const isMobileScreen = useMobileBreakpoint();

    const { oruga } = useProgrammatic();
    function toggleIsClipped(): void {
      document.documentElement.classList.toggle('is-clipped');
    }
    function showModal(): void {
      toggleIsClipped();
      oruga.modal.open({
        canCancel: ['escape', 'outside', 'button'],
        component: OrganismModal,
        onClose: toggleIsClipped,
      });
    }

    return { el, height, width, isMobileScreen, showModal };
  },
  computed: {
    buttonRight(): string {
      return `${this.isMobileScreen ? 1 : 4}rem`;
    },
    buttonBottom(): string {
      return `${this.isMobileScreen ? 3 : 4}rem`;
    },
    tooltipRight(): string {
      return `calc(${this.buttonRight} + ${this.width}px)`;
    },
    tooltipBottom(): string {
      return `calc(${this.buttonBottom} + ${this.height / 2}px)`;
    },
  },
});
</script>

<style scoped></style>
