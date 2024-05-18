<!-- SecondaryCard.vue -->
<template>
    <div class="header">
      <Goback :route="route"/>
      <div class="header-content">
        我的次卡说明
      </div>
    </div>
    <div v-if="!hasData" class="no-data-background">
      没有次卡信息
    </div>
    <div v-else>
      <!-- 这里是次卡数据的显示区域 -->
    </div>
  </template>
  
  <script setup>
  import Goback from '@/components/goback.vue';
  import { ref, provide } from 'vue';
  
  const route = ref('/user');
  provide('route', route);
  
  // 假设hasData是一个布尔值，表示是否有次卡数据
  const hasData = ref(false); // 根据实际情况设置
  </script>
  
  <style scoped>
  .header {
    background-color: #f00; /* 红色背景 */
    color: #fff; /* 白色字体 */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .header-content {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .no-data-background {
 
    color: #000; /* 白色字体 */
    text-align: center;
    padding: 20px;
  }
  </style>