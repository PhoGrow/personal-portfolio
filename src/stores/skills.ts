import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skills', {
  state: (): Skills => ({
    hardSkills: [
      {
        name: 'Frontend',
        items: ['Vue', 'Astro', 'Oruga', 'Bulma', 'Pinia', 'TypeScript'],
        rating: [3, 5],
      },
      {
        name: 'Backend',
        items: ['Node', 'Express', 'MongoDB', 'OpenAPI', 'JWT', 'TypeScript'],
        rating: [3, 5],
      },
      {
        name: 'DevOps',
        items: ['Docker', 'Ansible'],
        rating: [1, 5],
      },
      {
        name: 'Create',
        items: ['Presentations', 'Documentations'],
        rating: [3, 5],
      },
      {
        name: 'Determine',
        items: ['User interfaces', 'User experiences'],
        rating: [3, 5],
      },
    ],
    softSkills: [
      { icon: 'task_alt', name: 'Reliability' },
      { icon: 'event_note', name: 'Time management' },
      { icon: 'diversity_3', name: 'Teamwork' },
      { icon: 'troubleshoot', name: 'Eye for detail' },
      { icon: 'thumb_up_alt', name: 'Enthusiasm' },
      { icon: 'construction', name: 'Problem solving' },
    ],
  }),
});

export interface Skills {
  hardSkills: {
    name: string;
    items: string[];
    rating: [value: number, best: number];
  }[];
  softSkills: {
    icon: string;
    name: string;
  }[];
}
