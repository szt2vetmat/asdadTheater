import { createPinia } from 'pinia';

const pinia = createPinia();

export const useTheaterStore = pinia.defineStore('theater', {
  state: () => ({
    selectedTheater: {},
  }),
  actions: {
    selectTheater(theater) {
      this.selectedTheater = theater;
    },
  },
});

export default pinia;
