import { defineStore } from 'pinia';
import type { PersonalInfo } from '@/types';

export const usePersonalInfoStore = defineStore({
  id: 'personalInfo',
  state: () =>
    ({
      address: 'Locked',
      emailAddress: 'Locked',
      mobileNumber: 'Locked',
      languages: 'German (native), English (upper-intermediate)',
      website: 'Upcoming',
      linkedIn: 'www.linkedin.com/in/rene-dietz',
    } as PersonalInfo),
  getters: {},
  actions: {},
});
