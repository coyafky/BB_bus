import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
  state: () => ({
    selectedDayOfWeek: null,
    selectedDate: null,
  }),
  actions: {
    setSelectedDayOfWeek(dayOfWeek) {
      this.selectedDayOfWeek = dayOfWeek;
    },
    setSelectedDate(date) {
      this.selectedDate = date;
    },
    updateSelectedDayOfWeek() {
        const selectedDateObj = new Date(this.selectedDate);
        const dayIndex = selectedDateObj.getDay();
        const daysInEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.setSelectedDayOfWeek(daysInEnglish[dayIndex]);
      },
  },
});