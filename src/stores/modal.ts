import { defineStore } from 'pinia';
import type { Modal, Field, Input } from '@/types';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    // Content
    lockedContent: {
      icon: 'key',
      title: 'Download CV',
      subtitle: 'Remember the key? 👀',
    } as Modal,
    unlockedContent: {
      icon: 'download',
      title: 'Download CV',
      subtitle: 'Here you go!',
      description: 'Download via Google Drive. Thank you!',
    } as Modal,
    // Input field
    emptyField: {
      message: 'Paste the received passphrase',
    } as Field,
    filledField: {
      variant: 'danger',
      message: 'This passphrase is incorrect',
    } as Field,
    input: {
      placeholder: 'Enter passphrase',
    } as Input,
    // Encrypted(!) URL
    encryptedCvUrl:
      'U2FsdGVkX1/fQLTliQTRNckvv0bKuSJbx3gnTQHBkIsjlskiHgrrWYV2wwIQCV4V4YufL2qtzVp6VjjbHNofZ8Lj8W6j0SN/4wYx1Wf6XJPt2eJWT8pUWiIUy3wRXhr0',
  }),
  getters: {},
  actions: {},
});
