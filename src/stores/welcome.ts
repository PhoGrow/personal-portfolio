import { defineStore } from 'pinia';
import { useNameStore, store } from '.';

export const useWelcomeStore = defineStore('welcome', {
  state: (): Welcome => {
    const { fullName } = useNameStore(store);
    return {
      title: `Hi, I'm ${fullName} 👋`,
      subtitle: `I'm looking for a position as a frontend developer as an intern or in part-time 🧑‍💻`,
      callToAction: 'Check my CV',
      href: '#cv',
    };
  },
});

export interface Welcome {
  title: string;
  href: string;
  subtitle: string;
  callToAction: string;
}
