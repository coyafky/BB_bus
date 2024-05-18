

<template>
  <footer class="footer">
    <router-link to="/"><AkHomeAlt1/>首页</router-link>
    <router-link to="/orderTicket"><BsTicketPerforatedFill/>购票</router-link>
    <router-link to="/user"> <BxUserCircle/> 我的</router-link>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import { AkHomeAlt1 } from "@kalimahapps/vue-icons";
import { BsTicketPerforatedFill } from "@kalimahapps/vue-icons";
import { BxUserCircle } from "@kalimahapps/vue-icons";
// 定义props，如果需要传递参数可以在这里定义
const props = defineProps()

// 可以在这里添加其他逻辑或功能
</script>

<style>
.footer {
  /* 样式定义 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  background-color: #f5f5f5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.footer .router-link-active {
  display: flex;
  flex-direction: row; /* 或 row，取决于你希望图标和文字的排列方式 */
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  margin: 0 3px; /* 添加左右边距 */
  background-color: aqua;
  border-radius: 50px;
}

.footer .router-link-active svg {
  height: 24px; /* 调整图标高度，确保与文字对齐 */
  width: 24px; /* 保持宽高比 */
  margin-bottom: 3px; /* 添加图标和文字之间的间距 */
}



</style>