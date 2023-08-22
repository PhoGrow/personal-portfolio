<template>
  <div>
    <ATitle :text="title" class="is-1 is-spaced" />
    <ASubtitle :text="subtitle" class="is-3" />
    <AButton :href="href" @click.once="showCv">{{ callToAction }}</AButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ATitle from '@atoms/ATitle.vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import AButton from '@atoms/AButton.vue';
import { useWelcomeStore, useGlobalState, useToast, store } from '@stores';

export default defineComponent({
  name: 'OWelcome',
  components: {
    ATitle,
    ASubtitle,
    AButton,
  },
  setup() {
    const { title, subtitle, callToAction, href } = useWelcomeStore(store);
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
