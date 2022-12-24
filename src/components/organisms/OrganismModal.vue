<template>
  <AtomModalCard>
    <AtomBox class="has-text-centered has-background-primary">
      <AtomIcon :icon="content.icon" size="large" class="box mb-3" />
      <AtomTitle :text="content.title" />
      <AtomSubtitle :text="content.subtitle" />
      <AtomTransitionFade>
        <div v-if="decryptedCvUrl">
          <AtomBox>
            <AtomLink
              :href="decryptedCvUrl"
              :title="decryptedCvUrl"
              class="has-text-weight-semibold"
            />
          </AtomBox>
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
    </AtomBox>
  </AtomModalCard>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MoleculeFieldWithInput from '@/components/molecules/MoleculeFieldWithInput.vue';
import AtomModalCard from '@/components/atoms/AtomModalCard.vue';
import AtomBox from '@/components/atoms/AtomBox.vue';
import AtomIcon from '@/components/atoms/AtomIcon.vue';
import AtomTitle from '@/components/atoms/AtomTitle.vue';
import AtomSubtitle from '@/components/atoms/AtomSubtitle.vue';
import AtomTransitionFade from '@/components/atoms/AtomTransitionFade.vue';
import AtomLink from '@/components/atoms/AtomLink.vue';
import { useModalStore, useToast } from '@/stores';
import { AES, enc } from 'crypto-js';
import type { Modal, Field } from '@/types';

export default defineComponent({
  name: 'OrganismModal',
  components: {
    AtomModalCard,
    AtomBox,
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
    return {
      lockedContent,
      unlockedContent,
      emptyField,
      filledField,
      input,
      encryptedCvUrl,
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
