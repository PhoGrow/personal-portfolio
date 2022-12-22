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
import { defineComponent, type PropType } from 'vue';
import MoleculeFieldWithInput from '@/components/molecules/MoleculeFieldWithInput.vue';
import {
  AtomModalCard,
  AtomBox,
  AtomIcon,
  AtomTitle,
  AtomSubtitle,
  AtomTransitionFade,
  AtomLink,
} from '@/components/atoms';
import { useToast } from '@/stores';
import { AES, enc } from 'crypto-js';
import type { Modal, Field, Input } from '@/types';

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
  props: {
    lockedContent: {
      type: Object as PropType<Modal>,
      default: () => ({
        icon: 'key',
        title: 'Download CV',
        subtitle: 'Remember the key? 👀',
      }),
    },
    unlockedContent: {
      type: Object as PropType<Modal>,
      default: () => ({
        icon: 'download',
        title: 'Download CV',
        subtitle: 'Here you go!',
        description: 'Download via Google Drive. Thank you!',
      }),
    },
    emptyField: {
      type: Object as PropType<Field>,
      default: () => ({ message: 'Paste the received passphrase' }),
    },
    filledField: {
      type: Object as PropType<Field>,
      default: () => ({
        variant: 'danger',
        message: 'This passphrase is incorrect',
      }),
    },
    input: {
      type: Object as PropType<Input>,
      default: () => ({ placeholder: 'Enter passphrase' }),
    },
    encryptedCvUrl: {
      type: String,
      default:
        'U2FsdGVkX1/fQLTliQTRNckvv0bKuSJbx3gnTQHBkIsjlskiHgrrWYV2wwIQCV4V4YufL2qtzVp6VjjbHNofZ8Lj8W6j0SN/4wYx1Wf6XJPt2eJWT8pUWiIUy3wRXhr0',
    },
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
