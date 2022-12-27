<template>
  <div class="modal-card">
    <div
      :class="['box has-text-centered', { 'has-background-primary': !isDark }]"
    >
      <AtomIcon
        :icon="content.icon"
        size="large"
        :class="[
          'box mb-3',
          { 'has-background-secondary has-text-secondary-dark': isDark },
        ]"
      />
      <AtomTitle :text="content.title" />
      <AtomSubtitle :text="content.subtitle" />
      <AtomTransitionFade>
        <div v-if="decryptedCvUrl">
          <div :class="['box', { 'has-background-secondary': isDark }]">
            <AtomLink
              :href="decryptedCvUrl"
              :title="decryptedCvUrl"
              :class="[
                'has-text-weight-semibold',
                { 'has-text-secondary-dark': isDark },
              ]"
            />
          </div>
          <p>{{ content.description }}</p>
        </div>
        <MoleculeFieldWithInput
          v-else
          :field="field"
          :input="input"
          class="has-text-left"
          @input="decryptWithAES"
        />
      </AtomTransitionFade>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoleculeFieldWithInput from '@/components/molecules/MoleculeFieldWithInput.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import AtomTransitionFade from '@/components/atoms/AtomTransitionFade.vue';
import AtomLink from '@/components/atoms/AtomLink.vue';
import { useModalStore, useDarkMode, useToast } from '@/stores';
import { AES, enc } from 'crypto-js';
import type { Modal, Field } from '@/types';

export default defineComponent({
  name: 'OrganismModal',
  components: {
    AtomIcon,
    AtomTitle,
    AtomSubtitle,
    AtomTransitionFade,
    AtomLink,
    MoleculeFieldWithInput,
  },
  setup() {
    const {
      lockedContent,
      unlockedContent,
      emptyField,
      filledField,
      input,
      encryptedCvUrl,
    } = useModalStore();
    const isDark = useDarkMode();

    return {
      lockedContent,
      unlockedContent,
      emptyField,
      filledField,
      input,
      encryptedCvUrl,
      isDark,
    };
  },
  data() {
    return {
      hasInput: false,
      decryptedCvUrl: '',
    };
  },
  computed: {
    content(): Modal {
      return this.decryptedCvUrl ? this.unlockedContent : this.lockedContent;
    },
    field(): Field {
      return this.hasInput ? this.filledField : this.emptyField;
    },
  },
  created() {
    // const url = '';
    // const passphrase = '';
    // const encryptedUrl = this.encryptWithAES(url, passphrase);
    // console.log(encryptedUrl);
  },
  methods: {
    encryptWithAES(text: string, passphrase: string): string {
      return AES.encrypt(text, passphrase).toString();
    },
    decryptWithAES(passphrase: string): void {
      const bytes = AES.decrypt(this.encryptedCvUrl, passphrase);
      try {
        this.decryptedCvUrl = bytes.toString(enc.Utf8);
      } catch (error) {
        if ((error as Error).message === 'Malformed UTF-8 data') {
          return;
        }
        console.log(error);
      } finally {
        if (this.decryptedCvUrl.includes('https')) {
          useToast();
        } else {
          this.hasInput = passphrase ? true : false;
        }
      }
    },
  },
});
</script>

<style scoped></style>
