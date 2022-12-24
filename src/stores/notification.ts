import { defineStore } from 'pinia';
import { useNameStore } from './name';
import type { Notification } from '@/types';

export const useNotificationStore = defineStore({
  id: 'notification',
  state: () => {
    const { firstName } = useNameStore();
    return {
      icon: 'emoji_events',
      title: 'Achievement unlocked',
      description: `Access ${firstName}'s CV`,
    } as Notification;
  },
  getters: {},
  actions: {},
});
