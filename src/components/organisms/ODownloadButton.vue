<template>
  <ATooltip
    :label="label"
    :variant="isDark ? 'secondary' : 'dark'"
    class="is-fixed"
    :style="{ right: tooltipRight, bottom: tooltipBottom }"
  >
    <AButton
      ref="el"
      tag="button"
      size="large"
      class="is-fixed has-background-secondary p-5 animate-border-color"
      :style="{ right: buttonRight, bottom: buttonBottom }"
      @click="showModal"
    >
      <AIcon
        :icon="icon"
        size="medium"
        :class="{ 'has-text-secondary-dark': isDark }"
      />
    </AButton>
  </ATooltip>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import OModal from '@organisms/OModal.vue';
import ATooltip from '@atoms/ATooltip.vue';
import AButton from '@atoms/AButton.vue';
import AIcon from '@atoms/AIcon.vue';
import { useElementBounding } from '@vueuse/core';
import { useMobileBreakpoint, useDarkMode } from '@stores';

export default defineComponent({
  name: 'ODownloadButton',
  components: {
    ATooltip,
    AButton,
    AIcon,
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

    const showModal = () => {
      const toggleIsClipped = () => {
        document.documentElement.classList.toggle('is-clipped');
      };
      toggleIsClipped();
      const { oruga } = useProgrammatic();
      oruga.modal.open({
        canCancel: ['escape', 'outside', 'button'],
        component: OModal,
        destroyOnHide: false,
        onClose: toggleIsClipped,
      });
    };

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
