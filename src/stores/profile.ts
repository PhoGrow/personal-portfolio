import { defineStore } from 'pinia';
import { useMdToHtml } from '.';

export const useProfileStore = defineStore('profile', {
  state: (): Profile => ({
    fullName: 'Rene Dietz',
    linkedIn: 'https://linkedin.com/in/renedietz',
    summaryInMd: `Master's graduate looking for a first position as a web developer with focus on frontend.
      Gained fundamental technical knowledge of web, media, and design through studies in media technology.
      Self-taught developer in creating intuitive and responsive web applications who enjoys working with enthusiastic people on meaningful projects.
      Has worked as a gratuitous web developer for the unfounded startup [PhoGrow](https://phogrow3d.com) and is ready to gain first work experience in your business.`,
    image: {
      src: 'illustrations/building_websites.svg',
      alt: 'Building websites',
    },
  }),
  getters: {
    firstName: (state): string => state.fullName.split(' ')[0]!,
    summaryInHtml: (state): string => {
      const { html } = useMdToHtml(state.summaryInMd);
      return html.value;
    },
  },
});

export interface Profile {
  fullName: string;
  linkedIn: string;
  summaryInMd: string;
  image: Image;
}

export interface Image {
  src: string;
  alt: string;
}
