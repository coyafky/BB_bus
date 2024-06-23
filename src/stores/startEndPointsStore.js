import { defineStore } from 'pinia';

export const useStartEndPointsStore = defineStore('startEndPoints', {
  state: () => ({
    departurePoints: [],
    arrivalPoints: []
  }),
  actions: {
    setPoints(departurePoints, arrivalPoints) {
      this.departurePoints = departurePoints;
      this.arrivalPoints = arrivalPoints;
    }
  }
});