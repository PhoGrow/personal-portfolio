import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: (): Counter => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});

export interface Counter {
  count: number;
}
