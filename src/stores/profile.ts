import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useMdToHtml } from '.';

export const useProfileStore = defineStore('profile', () => {
  const profile: Profile = reactive({
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
  });

  const firstName = computed(() => profile.fullName.split(' ')[0]!);
  const summaryInHtml = computed(() => {
    const { html } = useMdToHtml(profile.summaryInMd);
    return html.value;
  });

  return { profile, firstName, summaryInHtml };
});

export type Profile = {
  fullName: string;
  linkedIn: string;
  summaryInMd: string;
  image: Image;
};

export type Image = {
  src: string;
  alt: string;
};
