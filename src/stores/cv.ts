import { defineStore } from 'pinia';

export const useCvStore = defineStore('cv', {
  state: (): Cv => ({
    sections: ['personal-info', 'education', 'skills'],
  }),
});

export interface Cv {
  sections: string[];
}
