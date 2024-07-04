
import { defineStore,} from 'pinia';


export const useRouteStore = defineStore('route', {
  state: () => ({
    route: null,
    start: null,
    end: null,
    schedules: null,
    status: null,
    arrivalPoints:[],
    departurePoints: [],
    Allschedules: [],
  
  }),
  actions: {
    setRoute(route) {
      this.route = route;
    },
    setStart(start) {
      this.start = start;
    },
    setEnd(end) {
      this.end = end;
    },
    setSchedules(schedules) {
      this.schedules = schedules;
      this.Allschedules = schedules.schedules; // 确保将schedules数组存储到Allschedules中
    },
    setStatus(status) {
      this.status = status; // 假设route对象中有一个status属性
    },
    setArrivalPoints(arrivalPoints) {
      this.arrivalPoints = arrivalPoints;
    },
    setDeparturePoints(departurePoints) {
      this.departurePoints = departurePoints;
    },
   
  },
});