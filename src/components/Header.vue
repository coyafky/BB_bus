<template>
  <div class="header">
    <goback class="goback"></goback>
    <div class="text">
      {{ message }}
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import goback from '../components/goback.vue';

// 定义父组件传入的文本
import { defineProps } from 'vue'

const props = defineProps({
  message: String
})





</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  /* 添加这一行来居中文本 */
  background-color: #d92825;
  color: white;
  
  padding-right: 10px;

  padding-top: 10px;

  padding-bottom: 10px;

  position: sticky;
  top: 0;
  z-index: 100;
  /* 确保标题在其他内容之上 */
}
.goback {
  position: absolute; /* 绝对定位 */
  left: 2px; /* 距离左边10px */
  font-size: 16px;
}

.text {
  flex: 1; /* 占据剩余空间 */
  text-align: center; /* 文本居中 */
 
  font-size: 20px;
  color:#fffbfa;
}
</style>