import { defineStore } from 'pinia';
import type { Welcome } from '@/types';

export const useWelcomeStore = defineStore({
  id: 'welcome',
  state: () =>
    ({
      title: `Hi, I'm Rene Dietz 👋`,
      subtitle: `I'm looking for a position as a frontend developer as an intern or in part-time 🧑‍💻`,
      callToAction: 'Check my CV',
      href: '#cv',
    } as Welcome),
  getters: {},
  actions: {},
});
