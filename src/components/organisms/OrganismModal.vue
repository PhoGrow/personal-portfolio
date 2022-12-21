<template>
  <AtomModalCard>
    <AtomBox class="has-text-centered has-background-yellow">
      <AtomIcon :icon="icon" size="large" class="box mb-3" />
      <AtomTitle :text="title" />
      <AtomSubtitle :text="subtitle" />
      <AtomTransitionFade>
        <div v-if="decryptedCvUrl">
          <!-- <AtomBox class="has-background-yellow-light">
            <AtomLink
              :href="decryptedCvUrl"
              :title="linkDescription"
              class="has-text-weight-semibold"
            />
          </AtomBox> -->
          <AtomButton :href="decryptedCvUrl" class="mb-3">{{
            linkDescription
          }}</AtomButton>
          <p>{{ description }}</p>
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
  // AtomLink,
  AtomButton,
} from '@/components/atoms';
import { useToast } from '@/stores';
import { AES, enc } from 'crypto-js';
import type { Field, Input } from '@/types';

export default defineComponent({
  name: 'OrganismModal',
  components: {
    AtomModalCard,
    AtomBox,
    AtomIcon,
    AtomTitle,
    AtomSubtitle,
    AtomTransitionFade,
    // AtomLink,
    MoleculeFieldWithInput,
    AtomButton,
  },
  props: {
    icon: {
      type: String,
      default: 'key',
    },
    title: {
      type: String,
      default: 'Download CV',
    },
    subtitle: {
      type: String,
      default: 'Remember the key? 👀',
    },
    linkDescription: {
      type: String,
      default: 'Click for German and English CV',
    },
    description: {
      type: String,
      default: 'Download via Google Drive. Thank you!',
    },
    field: {
      type: Object as PropType<Field>,
      default: () => ({ message: 'Paste the received passphrase' }),
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
      decryptedCvUrl: '',
    };
  },
  created() {
    // const url = '';
    // const passphrase = '';
    // const encryptedUrl = this.encryptWithAES(url, passphrase);
    // console.log(encryptedUrl);
    // const decryptedUrl = this.decryptWithAES(passphrase);
  },
  methods: {
    encryptWithAES(text: string, passphrase: string): string {
      return AES.encrypt(text, passphrase).toString();
    },
    decryptWithAES(passphrase: string): void {
      const bytes = AES.decrypt(this.encryptedCvUrl, passphrase);
      this.decryptedCvUrl = bytes.toString(enc.Utf8);
      if (this.decryptedCvUrl.includes('https')) {
        useToast();
      }
    },
  },
});
</script>

<style scoped></style>
