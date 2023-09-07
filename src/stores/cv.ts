import { defineStore } from 'pinia';

export const useCvStore = defineStore('cv', {
  state: (): Cv => ({
    sections: ['skills', 'education'],
  }),
});

export interface Cv {
  sections: string[];
}
