<template>
  <div>
    <AtomTitle :text="title" class="is-1 is-spaced" />
    <AtomSubtitle :text="subtitle" class="is-3" />
    <AtomButton :href="href" @click.once="showCv">{{
      callToAction
    }}</AtomButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import AtomButton from '@/components/atoms/AtomButton.vue';
import { useWelcomeStore, useGlobalState, useToast } from '@/stores';

export default defineComponent({
  name: 'OrganismWelcome',
  components: {
    AtomTitle,
    AtomSubtitle,
    AtomButton,
  },
  setup() {
    const { title, subtitle, callToAction, href } = useWelcomeStore();
    const { isCvVisible } = useGlobalState();

    return { title, subtitle, callToAction, href, isCvVisible, useToast };
  },
  methods: {
    showCv(): void {
      this.isCvVisible = true;
      this.useToast();
    },
  },
});
</script>

<style scoped></style>
