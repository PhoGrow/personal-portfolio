<template>
  <div class="modal-card">
    <!-- <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header> -->
    <AtomBox class="has-text-centered">
      <AtomIcon
        icon="key"
        size="large"
        class="has-background-yellow is-rounded mb-3"
        :style="{ padding: '2rem' }"
      />
      <AtomTitle text="Download CV" />
      <AtomSubtitle text="Remember the key? 👀" />
    </AtomBox>
    <!-- <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AtomBox, AtomIcon, AtomSubtitle, AtomTitle } from '@/components/atoms';
import { AES, enc } from 'crypto-js';

export default defineComponent({
  name: 'OrganismModal',
  components: {
    AtomIcon,
    AtomTitle,
    AtomBox,
    AtomSubtitle,
  },
  props: {
    encryptedCvUrl: {
      type: String,
      default:
        'U2FsdGVkX1+03T5UHH33937wHhIX909MaDEoIUZPKABVaa7CgptTQJacfOVii2kV',
    },
  },
  created() {
    // const url = 'https://google.com';
    // const passphrase = '';
    // const encryptedUrl = this.encryptWithAES(url, passphrase);
    // console.log(encryptedUrl);
    // const decryptedUrl = this.decryptWithAES(encryptedUrl, passphrase);
    // console.log(decryptedUrl);
  },
  methods: {
    encryptWithAES(text: string, passphrase: string): string {
      return AES.encrypt(text, passphrase).toString();
    },
    decryptWithAES(ciphertext: string, passphrase: string): string {
      const bytes = AES.decrypt(ciphertext, passphrase);
      const originalText = bytes.toString(enc.Utf8);
      return originalText;
    },
  },
});
</script>

<style scoped></style>
