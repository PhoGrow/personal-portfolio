import { defineStore } from 'pinia';
import type { PersonalInfo } from '@/types';
const descWithIcon = 'Locked';

export const usePersonalInfoStore = defineStore({
  id: 'personalInfo',
  state: () => ({
    title: 'Personal info',
    info: {
      address: descWithIcon,
      emailAddress: descWithIcon,
      mobileNumber: descWithIcon,
      languages: 'German (native), English (upper-intermediate)',
      website: 'Upcoming',
      linkedIn: 'www.linkedin.com/in/rene-dietz',
    } as PersonalInfo,
    descWithIcon,
    icon: 'lock',
  }),
  getters: {},
  actions: {},
});
