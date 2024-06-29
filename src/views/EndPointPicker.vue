<template>
    <Header :message="'选择下车点'"></Header>
  
    <div class="all_content">
      <div class="content">
        <button>所有</button>
      </div>
  
      <div class="point">
        <div class="point-container">
        <div class="all_point1">
          <button>所有站点</button>
        </div>
  
       
          <div v-for="arrivalPoint in arrivalPoints" :key="arrivalPoint" class="all_point2">
            <button @click="selectArrivalPoint(arrivalPoint)">{{ arrivalPoint }}</button>
          </div>
        
      </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useCityStore } from '../stores/cityStore';
  import Header from '@/components/Header.vue';
  import { useRouter } from 'vue-router';
  import { ref, onMounted, computed, inject } from 'vue';
  import axios from 'axios';
  import { useRouteStore } from '@/stores/routeStore';
  
  const router = useRouter();
  const routeStore = useRouteStore();
  const arrivalPoints = routeStore.arrivalPoints;
  console.log(arrivalPoints);
  
  function selectArrivalPoint(arrivalPoint) {
    console.log(arrivalPoint);
    router.push({
      path: '/QueryPage',
      query: { arrivalPoint }
    });
  }
  </script>
  
  <style scoped>
  .all_content {
    padding: 20px;
    padding-left: 0px;
    padding-right: 0px;
  }
  
  
  
  .point {
    display: flex;
    flex-direction: column;
  }
  
  .point-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .all_point1, .all_point2 {
    padding-left: 0px;
    flex: 0 0 50%; /* 每个子元素占据50%的宽度，确保每行2个元素 */
    box-sizing: border-box;
    padding: 5px; /* 可选：添加一些间距 */
    display: flex;
    justify-content: flex-start;
  }
  
  .all_point1{
    color: #db3832;
  }
  .all_point2{
    color: #878787;
  }

  .content button {
    width: 20%;
    padding: 10px;
    padding-left: 10px;
  
    border: 1px solid #db3832;
    border-radius: 5px; /* 圆角边框 */
    background-color: #fff;
    cursor: pointer;
    text-align: center;
  }
  
  .all_point1 button, .all_point2 button {
    padding-left: 0px;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    border-radius: 5px; /* 圆角边框 */
    background-color: #fff;
    cursor: pointer;
    text-align: start;
  }
  </style>