<template>
    <Header :message="'选择下车点'">

    </Header>

    <div class="content">

        <button>
            所有
        </button>
    </div>

    <div class="point">
        <div>
            <button>
                所有站点
            </button>

        </div>
        <div v-for="arrivalPoint in arrivalPoints" :key="arrivalPoint">
            <button>{{ arrivalPoint }}</button>
        </div>
    </div>


</template>

<script setup>
import { useCityStore } from '../stores/cityStore';
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router'
import { ref, onMounted, computed, inject } from 'vue';
import axios from 'axios';

const cityStore = useCityStore();


// 从Pinia中获取城市信息
const startCity = computed(() => cityStore.selectedStartCity);
const endCity = computed(() => cityStore.selectedEndCity);

defineProps({
    route: {
        type: Object,
        required: true
    }
});



const routes = ref([]);
const arrivalPoints = ref([]);
const router = useRouter();



const fetchRoutes = async () => {
    try {
        const response = await axios.get('http://localhost:3000/routes', {
            params: {
                start: startCity.value,
                end: endCity.value
            }
        });
        routes.value = response.data;
        // 假设我们选择第一个有 departurePoints 的 route
        const selectedRoute = routes.value.find(route => route.arrivalPoints);
        if (selectedRoute) {
            arrivalPoints.value = selectedRoute.arrivalPoints;
        }

    } catch (error) {
        console.error('Error fetching routes:', error);
    }
};

onMounted(() => {
    fetchRoutes();
});


</script>

<style scoped>
.content {
    display: flex;
    padding: 0;
    margin-left: 0;
}

.content button {
    border: 2px solid red;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0;

    height: auto;
    background-color: white;

}

.point {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.point div {
    flex-basis: 50%;
}

.all_point button {
    display: flex;
    align-items: start;
    width: 100%;
    height: 100%;
    border: none;
    background-color: white;
    padding: 10px;
    margin: 0;
    font-size: 16px;
    color: red;
    /* 其他样式属性 */
    border-bottom: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    border-left: 1px solid #e3e3e3;
}
</style>