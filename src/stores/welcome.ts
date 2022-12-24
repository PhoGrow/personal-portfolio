import { defineStore } from 'pinia';
import { useNameStore } from './name';
import type { Welcome } from '@/types';

export const useWelcomeStore = defineStore({
  id: 'welcome',
  state: () => {
    const { fullName } = useNameStore();
    return {
      title: `Hi, I'm ${fullName} 👋`,
      subtitle: `I'm looking for a position as a frontend developer as an intern or in part-time 🧑‍💻`,
      callToAction: 'Check my CV',
      href: '#cv',
    } as Welcome;
  },
  getters: {},
  actions: {},
});
