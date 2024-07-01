import { defineStore } from 'pinia';

export const useTicketInformationStore = defineStore('ticketInformation', {
  state: () => ({
    selectedStartCity,
    selectedEndCity,
    arrivalPoints,
    departurePoints,
    arrivalPoint_time

  }),
  actions: {
    setStartCity(city) {
      this.selectedStartCity = city;
    },
    setEndCity(city) {
      this.selectedEndCity = city;
    },
    setArrivalPoints(arrivalPoints) {
      this.arrivalPoints = arrivalPoints;
    },
    setDeparturePoints(departurePoints) {
      this.departurePoints = departurePoints;
    },
    setArrivalPoint_time(arrivalPoint_time) {
      this.arrivalPoint_time = arrivalPoint_time;
    },
  },
},{
  persist: true
})