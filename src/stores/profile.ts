import { defineStore } from 'pinia';
import type { Linkage } from '.';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    title: 'Profile',
    text: `Creative and persistent fresh graduate looking for a first position as a frontend developer.
      Gained fundamental technical knowledge in web, media, and design through studies in media technology.
      Self-taught developer in creating intuitive and responsive web applications who loves to work with enthusiastic individuals on meaningful projects.
      Currently a gratuitous web developer for the 'yet to be founded' startup PhoGrow and ready to gather first work experience in your business.`,
    linkage: {
      title: 'PhoGrow',
      href: 'https://phogrow3d.com',
    } as Linkage,
  }),
});
