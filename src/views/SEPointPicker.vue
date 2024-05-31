<template>
    <Header :message="'选择上下车点'">

    </Header>
    <div class="content">

        <div class="select-point">
            <BxSolidBus/>
            选择上下车点
        </div>

        <div class="time-picker">
            时刻
        </div>

        <!-- 用组件和数据渲染 -->

    </div>
    <button @click="goToPayment">
            下一步 
            <!-- 跳转到支付页面 -->
    </button>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import  Header from '@/components/Header.vue'
import { BxSolidBus } from "@kalimahapps/vue-icons";

const router = useRouter();

const goToPayment = () => {
    router.push('/paymentPage');
}

</script>

<style  scoped>
.content{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin-top: 100px;
}

.select-point{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    position: relative;
    right: 120px;

}

.time-picker{
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    position: relative;
    left: 120px;
}

button{
 width: 100%;
  height:150%;
  background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
  border: none;
  border-radius: 10px;
  color: white;
}

</style>