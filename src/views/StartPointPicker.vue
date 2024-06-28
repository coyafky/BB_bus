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
            <div class="all_point1">
                <button @click ="selectAllPoints">
                    所有站点
                </button>
            </div>
            <div v-for="departurePoint in departurePoints" :key="departurePoint" class="all_point2">
                <button @click="selectDeparturePoint(departurePoint)">{{ departurePoint }}</button>
            </div>
        </div>
    </div>


</template>

<script setup>
import {useDeparturePointStore} from '@/stores/departurePointStore';
import { useCityStore } from '../stores/cityStore';
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router'
import { ref, onMounted, computed, inject } from 'vue';
import axios from 'axios';
import { useRouteStore } from '@/stores/routeStore';

const routeStore = useRouteStore();
const departurePoints = routeStore.departurePoints;
console.log(departurePoints);




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
    flex-basis: 49%;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all_point1 button {
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
    border-radius: 1px;
}
.all_point2 button {
    display: flex;
    align-items: start;
    width: 100%;
    height: 100%;
    border: none;
    background-color: white;
    padding: 10px;
    margin: 0;
    font-size: 16px;
    
    /* 其他样式属性 */
    border-bottom: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    border-top: 1px solid #e3e3e3;
    border-left: 1px solid #e3e3e3;
    border-radius: 10%;
    margin-left: 0.5px;
    box-shadow: #e3e3e3 0px 0px 0px 0.2px;
}
</style>