import { defineStore } from 'pinia';
import type { Name } from '@/types';

export const useNameStore = defineStore({
  id: 'name',
  state: () =>
    ({
      firstName: 'Rene',
      lastName: 'Dietz',
    } as Name),
  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`,
  },
  actions: {},
});
