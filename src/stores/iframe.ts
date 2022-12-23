import { defineStore } from 'pinia';
import type { Iframe } from '@/types';

export const useIframeStore = defineStore({
  id: 'iframe',
  state: () =>
    ({
      src: 'https://phogrow3d.com',
      title: 'PhoGrow',
      caption: 'Current work in progress at PhoGrow',
    } as Iframe),
  getters: {},
  actions: {},
});
