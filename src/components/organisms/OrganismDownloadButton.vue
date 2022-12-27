<template>
  <AtomTooltip
    :label="label"
    :variant="isDark ? 'secondary' : 'dark'"
    class="is-fixed"
    :style="{ right: tooltipRight, bottom: tooltipBottom }"
  >
    <AtomButton
      ref="el"
      tag="button"
      size="large"
      class="is-fixed has-background-secondary p-5 animate-border-color"
      :style="{ right: buttonRight, bottom: buttonBottom }"
      @click="showModal"
    >
      <AtomIcon
        :icon="icon"
        size="medium"
        :class="{ 'has-text-secondary-dark': isDark }"
      />
    </AtomButton>
  </AtomTooltip>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import OrganismModal from '@/components/organisms/OrganismModal.vue';
import AtomTooltip from '@/components/atoms/AtomTooltip.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint, useDarkMode } from '@/stores';

export default defineComponent({
  name: 'OrganismDownloadButton',
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
    const isDark = useDarkMode();

    const { oruga } = useProgrammatic();
    function toggleIsClipped(): void {
      document.documentElement.classList.toggle('is-clipped');
    }
    function showModal(): void {
      toggleIsClipped();
      oruga.modal.open({
        canCancel: ['escape', 'outside', 'button'],
        component: OrganismModal,
        destroyOnHide: false,
        onClose: toggleIsClipped,
      });
    }

    return { el, height, width, isMobileScreen, isDark, showModal };
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
