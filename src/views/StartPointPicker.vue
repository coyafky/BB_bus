<template>
    <Header :message="'选择上车点'">

    </Header>

    <div class="all_content">
        <div class="content">
            <button>
                所有
            </button>
        </div>

        <div class="point">
            <div class="all_point">
                <button>
                    所有站点
                </button>
            </div>
            <div v-for="(pickupPoint, index) in currentCityPickupPoints" :key="index">
                {{ pickupPoint }}
            </div>
            <!-- 从数据库中获取站点位置 -->
            <!-- 并且每一行 只有2个 站点位置 -->
        </div>
    </div>


</template>

<script setup>

import Header from '@/components/Header.vue';
import { ref, onMounted ,computed} from 'vue';
import axios from 'axios';
import { useCityStore } from '../stores/cityStore';


// const cityStore = useCityStore();
// const cities = ref(cityStore.cities);
// const currentCity = ref(cityStore.currentCity);

// const fetchCities = async () => {
//     try {
//         const response = await axios.get('http://localhost:3000/cities');
//         cities.value = response.data;
//     } catch (error) {
//         console.error(error);
//     }
// };

// onMounted(() => {
//     fetchCities();
//     //   根据cities来fetch上车点
//     // 然后渲染到页面上
//     // 并且根据当前城市来筛选

// });


// const currentCityPickupPoints = computed(() => {
//     const currentCityData = cities.value.find(city => city.name === currentCity.value);
//     return currentCityData ? currentCityData.pickupPoints : [];
// });

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