

<template>
  <footer class="footer">
    <router-link to="/">首页</router-link>
    <router-link to="/orderTicket">购票</router-link>
    <router-link to="/user">我的</router-link>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

// 定义props，如果需要传递参数可以在这里定义
const props = defineProps()

// 可以在这里添加其他逻辑或功能
</script>

<style>
</style>