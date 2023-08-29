import { defineStore } from 'pinia';
import { useMarkdownToHtml, type Image } from '.';

export const useProfileStore = defineStore('profile', {
  state: (): Profile => ({
    summaryInMarkdown: `Master's graduate looking for a first position as a frontend developer.
      Gained fundamental technical knowledge of web, media, and design through studies in media technology.
      Self-taught developer in creating intuitive and responsive web applications who enjoys working with enthusiastic people on meaningful projects.
      Has worked as a gratuitous web developer for the unfounded startup [PhoGrow](https://phogrow3d.com) and is ready to gain first work experience in your business.`,
    image: {
      src: 'illustrations/building_websites.svg',
      alt: 'Building websites',
    },
  }),
  getters: {
    summaryInHtml: (state) => {
      const { html } = useMarkdownToHtml(state.summaryInMarkdown);
      return html;
    },
  },
});

export interface Profile {
  summaryInMarkdown: string;
  image: Image;
}
