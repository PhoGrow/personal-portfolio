import { defineStore } from 'pinia';
import { useNameStore } from '.';

export const useNotificationStore = defineStore('notification', {
  state: (): Notification => {
    const { firstName } = useNameStore();
    return {
      icon: 'emoji_events',
      title: 'Achievement unlocked',
      description: `Access ${firstName}'s CV`,
    };
  },
});

export interface Notification {
  icon: string;
  title: string;
  description: string;
}
