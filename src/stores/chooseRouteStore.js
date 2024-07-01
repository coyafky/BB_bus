import { defineStore } from 'pinia';

export const useChooseRouteStore = defineStore('chooseRoute', {
    state: () => {
        return {
            chooseStartPoint: null,
            chooseEndPoint: null,
            depatureTime: null,
            price: null
        };
    },
    actions: {
        setChooseStartPoint(chooseStartPoint) {
            this.chooseStartPoint = chooseStartPoint;
        },
        setChooseEndPoint(chooseEndPoint) {
            this.chooseEndPoint = chooseEndPoint;
        },
        setDepatureTime(depatureTime) {
            this.depatureTime = depatureTime;
        },
        setPrice(price) {
            this.price = price;
        }
    },
},{
    persist: true
})