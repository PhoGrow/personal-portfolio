import { defineStore } from 'pinia';

export const useSkillsStore = defineStore('skills', {
  state: (): Skills => ({
    hardSkills: [
      {
        category: 'My web skills',
        subcategories: [
          {
            name: 'Frontend',
            items: ['Vue', 'Astro', 'Oruga', 'Bulma', 'Pinia', 'TypeScript'],
            rating: [3, 5],
          },
          {
            name: 'Backend',
            items: [
              'Node',
              'Express',
              'MongoDB',
              'OpenAPI',
              'JWT',
              'TypeScript',
            ],
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
      },
    ],
    softSkills: {
      title: 'My other skills',
      items: [
        'Reliable',
        'Time management',
        'Teamwork',
        'Eye for detail',
        'Enthusiastic',
        'Problem solver',
      ],
    },
  }),
});

export interface Skills {
  hardSkills: {
    category: string;
    subcategories?: {
      name: string;
      items: string[];
      rating: [value: number, best: number];
    }[];
    items?: string[];
    rating?: [value: number, best: number];
  }[];
  softSkills: {
    title: string;
    items: string[];
  };
}
