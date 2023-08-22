import { defineStore } from 'pinia';

export const usePersonalInfoStore = defineStore('personalInfo', {
  state: () => {
    const descWithIcon = 'Locked';
    return {
      title: 'Personal info',
      info: {
        address: descWithIcon,
        emailAddress: descWithIcon,
        mobileNumber: descWithIcon,
        languages: 'German (native), English (upper-intermediate)',
        website: 'https://renedietz.netlify.app',
        linkedIn: 'https://linkedin.com/in/renedietz',
      } as PersonalInfo,
      descWithIcon,
      icon: 'lock',
    };
  },
});

export interface PersonalInfo {
  address: string;
  emailAddress: string;
  mobileNumber: string;
  languages: string;
  website: string;
  linkedIn: string;
}
