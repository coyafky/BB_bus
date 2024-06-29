
<template>
    <Header :message="'选择上下车点'"></Header>
    <div class="maincontainer">
        <div class="content">
            <div class="header">
                <span class="icon_bus"> <MdRoundDirectionsBus class="bus_svg"/> </span>
                <span>选择上下车站点</span>
                <span class="time">时刻</span>
            </div>
        </div>
        <div class="stations-list">
            <div v-for="(point, index) in departurePoints" :key="index" class="station-item">
                <span class="station-info">
                    <button class="station_point_item_picker" @click="selectDeparturePoint(point)">
                        <span class="departure-icon" :class="{ 'selected-icon': selectedDeparturePoint === point }">上</span>

                        <span>
                            {{ point.name}}
                        </span>
                        <span class="time">{{ point.departureTime }}</span>
                    </button>
                </span>
            </div>
        </div>

        <div class="dropoff-list">
            <div v-for="(point, index) in arrivalPoints" :key="index" class="dropoff-item">
                <span class="station-info">
                    <button @click="selectArrivalPoint(point)">
                        <span class="arrival-icon" :class="{ 'selected-arrival-icon': selectedArrivalPoint === point }">下</span>
                        {{ point }}
                    </button>
                </span>
            </div>
        </div>
        <button class="go-next" @click="goToPayment">下一步</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStartEndPointsStore } from '@/stores/startEndPointsStore'; // 引入你的 Pinia store
import { MdRoundDirectionsBus } from '@kalimahapps/vue-icons';
import { useChooseRouteStore } from '@/stores/chooseRouteStore';


const startEndPointsStore = useStartEndPointsStore();
const chooseRouteStore = useChooseRouteStore();
const departurePoints = startEndPointsStore.departurePoints;
const arrivalPoints = startEndPointsStore.arrivalPoints;

const selectedDeparturePoint = ref(null);
const selectedArrivalPoint = ref(null);



const router = useRouter();


function departurePointNames (point){
    return point.map(point=>point.name)
}
const selectDeparturePoint = (point) => {
    selectedDeparturePoint.value = point;
};

const selectArrivalPoint = (point) => {
    selectedArrivalPoint.value = point;
};
const goToPayment = () => {
    console.log(selectedDeparturePoint.value);
    console.log(selectedArrivalPoint.value);
    if (selectedDeparturePoint.value && selectedArrivalPoint.value)
    {
    chooseRouteStore.setChooseStartPoint(selectedDeparturePoint.value.name)
    chooseRouteStore.setChooseEndPoint(selectedArrivalPoint.value)
    chooseRouteStore.setDepatureTime (selectedDeparturePoint.value.departureTime)
    console.log(chooseRouteStore.chooseStartPoint);
    console.log(chooseRouteStore.chooseEndPoint);
    console.log(chooseRouteStore.depatureTime);
    router.push('/paymentPage');
    }
    else
    {
        alert('请选择上下车点');
    }
     

    // 选择上下车点后，将上下车点的信息存储在pinia中
  
};


</script>

<style scoped>
.maincontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 16px;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
}

.header {
    display: flex;
   
    margin-bottom: 10px;
}

.stations-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
}

.station-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
    width: 100%;
    
}

.icon_bus {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 5px;
    color: #545353;
}

.bus_svg {
    height: 20px;
    width: 20px;
}

.station-info {
    flex-grow: 1;
    text-align: left;
    padding: 10px;
    padding-left: 0px;
}

.time {
    margin-left: 8px;
    color: red;
    position: absolute;
    right: 10px;

}

.dropoff-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 16px;
}

.dropoff-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
}

button {
    border: none;
    background-color: transparent;
    font-size: 16px;
}

.go-next {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
    border: none;
    border-radius: 10px;
    color: white;
    position: relative;
    left: -13px;
    bottom: -20px;
}

.departure-icon {
    color: #dcedca;
    border: 1px solid #dcedca;
    border-radius: 50%;
    font-size: 0.8em;
    padding: 1px;
    margin-left: 8px;
}

.arrival-icon {
    color: #f83600;
    border: 1px solid #f83600;
    border-radius: 50%;
    font-size: 0.8em;
    padding: 1px;
    margin-left: 8px;
   
}

.selected-icon {
    background-color: #f0ab4a;
    color: white;
}
.selected-arrival-icon {
    background-color: #f76d52;
    color: white;
}
</style>
