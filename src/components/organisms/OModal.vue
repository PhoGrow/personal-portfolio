<template>
  <div class="modal-card">
    <div
      :class="['box has-text-centered', { 'has-background-primary': !isDark }]"
    >
      <AIcon
        :icon="content.icon"
        size="large"
        :class="[
          'box mb-3',
          { 'has-background-secondary has-text-secondary-dark': isDark },
        ]"
      />
      <ATitle :text="content.title" />
      <ASubtitle :text="content.subtitle" />
      <ATransitionFade>
        <div v-if="decryptedCvUrl">
          <div :class="['box', { 'has-background-secondary': isDark }]">
            <ALink
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
        <MFieldWithInput
          v-else
          :field="field"
          :input="input"
          class="has-text-left"
          @input="decryptWithAES"
        />
      </ATransitionFade>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MFieldWithInput from '@molecules/MFieldWithInput.vue';
import AIcon from '@atoms/AIcon.vue';
import ATitle from '@atoms/ATitle.vue';
import ASubtitle from '@atoms/ASubtitle.vue';
import ATransitionFade from '@atoms/ATransitionFade.vue';
import ALink from '@atoms/ALink.vue';
import { useModalStore, useDarkMode, useToast, store } from '@/stores';
import type { Modal, Field } from '@/stores';
import AES from 'crypto-js/aes';
import ENC from 'crypto-js/enc-utf8';

export default defineComponent({
  name: 'OModal',
  components: {
    AIcon,
    ATitle,
    ASubtitle,
    ATransitionFade,
    ALink,
    MFieldWithInput,
  },
  setup() {
    const {
      lockedContent,
      unlockedContent,
      emptyField,
      filledField,
      input,
      encryptedCvUrl,
    } = useModalStore(store);
    const isDark = useDarkMode();

    return {
      lockedContent,
      unlockedContent,
      emptyField,
      filledField,
      input,
      encryptedCvUrl,
      isDark,
      useToast,
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
        this.decryptedCvUrl = bytes.toString(ENC);
      } catch (error) {
        if ((error as Error).message === 'Malformed UTF-8 data') {
          return;
        }
        console.log(error);
      } finally {
        if (this.decryptedCvUrl.includes('https')) {
          this.useToast();
        } else {
          this.hasInput = passphrase ? true : false;
        }
      }
    },
  },
});
</script>

<style>
.modal-content {
  display: flex;
  justify-content: center;
}
</style>
