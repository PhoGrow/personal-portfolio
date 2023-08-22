import { defineStore } from 'pinia';

export const useNameStore = defineStore('name', {
  state: (): Name => ({
    firstName: 'Rene',
    lastName: 'Dietz',
  }),
  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`,
  },
});

export interface Name {
  firstName: string;
  lastName: string;
}
