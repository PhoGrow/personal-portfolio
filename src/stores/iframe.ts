import { defineStore } from 'pinia';

export const useIframeStore = defineStore('iframe', {
  state: (): Iframe => ({
    src: 'https://phogrow3d.com',
    title: 'PhoGrow',
    caption: 'Current work in progress at PhoGrow',
  }),
});

export interface Iframe {
  title: string;
  src: string;
  caption: string;
}
