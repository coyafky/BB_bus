<template>
  <div class="container">
    <div class="photo">
        <img src="../assets/image/homepage.png" alt="">
    </div>

    <div class="notice">
        <div>

        </div>
        <p>
            用户购票须知
        </p>
    </div>

    <div class="select">

    </div>

    <Footer class="footer"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Footer from '@/components/Footer.vue'
</script>

<style >
/* 在父容器中使用Flex布局 */
.container {
  display: flex;
  flex-direction: column; /* 垂直方向排列子元素 */
  height: 100vh; /* 设置父容器高度为整个视口高度 */
}

.photo {
  flex: 2; /* Photo组件占据剩余空间 */
  position: relative; /* 相对定位，用于绝对定位子元素 */
}

.photo img {
  width: 100%; /* 图片宽度与父元素相同 */
  height: 100%; /* 图片高度与父元素相同 */
  object-fit: cover; /* 图片填充整个区域，保持比例 */
}

.notice {
  flex: 0.5; /* Notice组件占据剩余空间的2倍 */
  background-color: #dce6b6;
  display: flex; /* 使用Flex布局 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.notice p {
  margin: 0; /* 去除段落的默认边距 */
}

.select {
  flex: 5; /* Select组件占据剩余空间 */
  background-color: #f2f2f2;
}
.footer{
    flex: 0.5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #dce6b6;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0 10px;
}

    
</style>