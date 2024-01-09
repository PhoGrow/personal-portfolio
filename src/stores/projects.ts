import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { useMdToHtml } from '.';

export const useProjectsStore = defineStore('projects', () => {
  const projects: Projects = reactive({
    descriptionInMd: `This section presents past projects, most likely from work,
    in the form of a blog and a link to the production site. There are exceptions.`,
    projects: [
      {
        link: '/weather',
        icon: 'nights_stay',
        topic: 'Weather',
      },
    ],
  });

  const descriptionInHtml = computed(() => {
    const { html } = useMdToHtml(projects.descriptionInMd);
    return html.value;
  });

  return { projects, descriptionInHtml };
});

export type Projects = {
  descriptionInMd: string;
  projects: {
    link: string;
    icon: string;
    topic: string;
  }[];
};
