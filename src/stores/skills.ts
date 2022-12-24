import { defineStore } from 'pinia';
import type { SkillSet, Linkage } from '@/types';

export const useSkillsStore = defineStore({
  id: 'skills',
  state: () => ({
    title: 'Skills',
    skillSets: [
      {
        title: `Hard skills`,
        skills: [
          {
            property: `Frontend: Vue 3, including TypeScript, Bulma, Oruga, etc.`,
          },
          {
            property: `Backend: ME(V)N stack (MongoDB, Express, Node), including TypeScript, OpenAPI, JWT, etc.`,
          },
          {
            property: `First touchpoints with dApps (decentralized apps), including Ethers, Hardhat, Solidity, etc.`,
          },
          { property: `Determine great UI/UX, create presentations, etc.` },
        ],
      },
      {
        title: `Soft skills`,
        skills: [
          { property: `Eager to learn and disciplined` },
          { property: `Friend of teamwork and project management` },
          { property: `Assume responsibility` },
          {
            property: `Participation in seminars of ELEVEL on the topics project management, productivity, and personal finances and taxes in 2022`,
            linkage: {
              title: `ELEVEL`,
              href: `https://www.elevel-academy.de`,
            } as Linkage,
          },
        ],
      },
    ] as SkillSet[],
  }),
  getters: {},
  actions: {},
});
