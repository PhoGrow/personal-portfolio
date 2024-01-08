import { defineStore } from 'pinia';
import { useMdToHtml } from '.';

export const useProjectsStore = defineStore('projects', {
  state: (): Projects => ({
    descriptionInMd: `This section presents past projects, most likely from work,
    in the form of a blog and a link to the production site. There are exceptions.`,
    projects: [
      {
        link: '/weather',
        icon: 'nights_stay',
        topic: 'Weather',
      },
    ],
  }),
  getters: {
    descriptionInHtml: (state): string => {
      const { html } = useMdToHtml(state.descriptionInMd);
      return html.value;
    },
  },
});

export interface Projects {
  descriptionInMd: string;
  projects: {
    link: string;
    icon: string;
    topic: string;
  }[];
}
