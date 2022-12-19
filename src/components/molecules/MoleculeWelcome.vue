<template>
  <div>
    <AtomTitle :text="title" class="is-1 is-spaced" />
    <AtomSubtitle :text="subtitle" class="is-3" />
    <AtomButton :href="href" @click.once="showToast">{{
      callToAction
    }}</AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { useProgrammatic } from '@oruga-ui/oruga-next';
import { MoleculeNotification } from '@/components/molecules';
import { AtomTitle, AtomSubtitle, AtomButton } from '@/components/atoms';
import type { Welcome } from '@/types';

export default defineComponent({
  name: 'MoleculeWelcome',
  components: {
    AtomTitle,
    AtomSubtitle,
    AtomButton,
  },
  props: {
    welcome: {
      type: Object as PropType<Welcome>,
      required: true,
    },
  },
  setup() {
    const { oruga } = useProgrammatic();
    const showToast = () => {
      oruga.notification.open({
        duration: 4000,
        component: MoleculeNotification,
        position: 'bottom',
        variant: 'dark',
      });
    };
    return { showToast };
  },
  data() {
    return {
      ...this.welcome,
    };
  },
});
</script>

<style scoped></style>
