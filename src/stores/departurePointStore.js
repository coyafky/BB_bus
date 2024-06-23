// stores/departurePointStore.js
import { defineStore } from 'pinia';

export const useDeparturePointStore = defineStore('departurePoint', {
  state: () => ({
    selectedDeparturePoint: null,
  }),
  actions: {
    setDeparturePoint(point) {
      this.selectedDeparturePoint = point;
    },
  },
});