<template>
<Header :message="'选择优惠卷'"  class="unique-header">

</Header>

<div class="container">
    <div class="content">
      
        <button class="coupon" @click="useVoucher">
            <div class="text">
                不使用优惠卷
            </div>
            <div class="icon">
                <el-icon class="el-icon2"><Select /></el-icon>
            </div>
        </button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import { Select } from "@element-plus/icons-vue";

import {useRouter} from 'vue-router';

const router = useRouter();


const useVoucher = () => {
    router.push('/paymentPage')
}
</script>



<style scoped>
.container {
    padding: 0;
    margin: 0;
    background-color: #eeedf2;
    height: 100vh;
}
.content{
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100%;
}
.coupon{
    width:100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    background-color: inherit
}
.text{
    font-size: 15px;
    color: #878787;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    width:25px;
    height: 25px;
    font-size: 16px;
    color:white;
    background-color: #d92825;
    border-radius: 50%;

}
.el-icon2{
    display: flex;
    justify-content: center;
    align-items: center;
}
::v-deep .unique-header .header {
  z-index: none; /* 或者你想要的值 */
}
</style>