<template>
  <div class="ticket-booking-page">
    <Header :message="'车票预订'">

    </Header>

    <div class="route-info">

      <!-- 起点终点 -->
      <div class="start">
        <div>
          {{ cityStore.selectedStartCity }}
        </div>
        <div>
          
          <!-- 上车点 -->
           {{ chooseRouteStore.chooseStartPoint }}
        </div>
      </div>

      <div class="time">
        <div>
          {{ dateStore.selectedDate }}
        </div>
        <div>
          ———————>
        </div>
        <div>
          {{ chooseRouteStore.depatureTime}}
          <!-- 上车时间 -->
        </div>

      </div>

      <div class="end">
        <div>
          {{ cityStore.selectedEndCity}}
        </div>
        <div>
          {{ chooseRouteStore.chooseEndPoint }}
          <!-- 下车点 -->
        </div>
      </div>
    </div>

    <!-- 票数选择 -->
    <div class="ticket-card">
      <div class="ticket-selection-header">
        <div class="ticket-title">
          票数选择
        </div>
        <div class="ticket-description">
          <RouterLink to="/useragreement" class="ticket-link">
          <AkQuestion class="question-icon" />
          购票须知
        </RouterLink>
        </div>
      </div>
     
      <div class="ticket-counter">
        <span>成人票数</span>
        <span> (￥{{chooseRouteStore.price}})/张</span>
        <Counter v-model="adultCount" label="成人票数" class="counter" />
      </div>
   
      <div class="ticket-counter">
        <span>儿童票数</span>
        <span> (￥{{chooseRouteStore.price/2}})/张</span>
        <Counter v-model="childCount" label="儿童票数" class="counter" />
      </div>

    <!-- 交通部规定 -->
    <div class="transportation">
      <el-row>
      <el-text class="transportation-rules">
        交通部规定：儿童和婴儿乘车必须有成年人陪同，请带儿童或婴儿的乘客在购票时购买儿童或婴儿票。(1米2以上视作成人)
      </el-text>
    </el-row>
    </div>
    </div>

    
    <!-- 乘车人选择 -->
    <div class="select_passagner">
      <div class="select_passsanger_title">

        <div>
          选择乘车人
        </div>
        <div>
          <button class="add">
            (添加&修改) <span class="icon"> >></span>
          </button>
        </div>
      </div>
      <el-divider />
      <!-- 这个地方如果有存储到乘车人的数据，就要加入一个乘车人 -->
    </div>

    <div class="phone_number">
      <div>
        联系人号码
      </div>

      <div>
        <input type="text" placeholder="请输入手机号码手机号">
      </div>
    </div>

    <!-- 提交按钮 -->

    <!-- 订单的总金额 -->

    <div class="total-price">
      <span>
        订单的总金额:
      </span>
      <span class="price">
        {{ totalPrice}}
      </span>
    </div>

    <div class="payment_method_container">
      <div class="payment_method">
        选择支付方式
      </div>

      <div class="wechat_pay">
        <div class="wechat_photo">
          <img src="../assets/image/wechat.png " width="32px" height="32px">
        </div>
        <div>
          <div class="wechat_pay_title">
            微信支付
          </div>

          <div class="wechat_pay_description">
            选择微信支付 安全便捷
          </div>
        </div>

        <div class="correct_icon">
          <!-- 一个勾号icon -->
          <span class="select_icon">
            <el-icon><Select /></el-icon>
          </span>
        </div>

      </div>
    </div>


    <div class="select_coupon">
      <button>
        <span>
          选择优惠卷
        </span>
        <span>
          >
        </span>
      </button>
    </div>
    <div class="submit-button_1">
      <button class="submit-button" @click="submitorder">
        提交订单
      </button>
    </div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, provide } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { AkQuestion } from "@kalimahapps/vue-icons";
import Counter from '@/components/CounterTicket.vue';
import Header from '@/components/Header.vue';
import { Select } from "@element-plus/icons-vue";

import { useStartEndPointsStore } from '@/stores/startEndPointsStore'; // 引入你的 Pinia store
import { useDateStore } from '@/stores/dateStore';
import { useCityStore } from '@/stores/cityStore';
import {useRouteStore} from '@/stores/routeStore';
import {useChooseRouteStore} from '@/stores/chooseRouteStore';

const startEndPointsStore = useStartEndPointsStore();
const dateStore = useDateStore();
const cityStore = useCityStore();
const routeStore = useRouteStore();
const chooseRouteStore = useChooseRouteStore();


const router = useRouter();


// 定义计数器状态
const adultCount = ref(0);
const childCount = ref(0);


const totalPrice = computed(() => {
  return adultCount.value * chooseRouteStore.price + childCount.value * (chooseRouteStore.price / 2);
});


provide('counterValues', {
  adultCount,
  childCount,
});


function submitorder() {
  console.log("提交订单");
  // 提交订单逻辑
  router.push({
    path: '/orderTicket/unfinished',
    query: { hasOrder: true } // 传递一个查询参数
  });
  // 传一个值到该页面中
  // orderTicket/unfinished如果接收了该值，就使用订单组件，否则使用空组件
  //传递一个查询参数
}


</script>

<style scoped>
.ticket-booking-page {
  display: flex;
  flex-direction: column;
 
  height: 100vh;
  background-color: #f1f0f5;
}

.header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
  background-color: #d92825;
  color: white;

}

::v-deep .text {
  position: relative;
  left: -25px;
}



.route-info{
  background-color: #d92825;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
}


.start {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px
}

.time {
  display: flex;
  flex-direction: column;
  align-items: center
}

.end {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px
}




.ticket-selection-header {
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  
}
.ticket-title{
  color: red;
}



.ticket-card {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}



.ticket-counter {
  display: flex;
  flex-direction: row;
 
  align-items: center;
  padding: 10px;
  border-top: 1px solid #f1f0f5;
}

.ticket-description{
  color:#4096ff ;
}

.counter {
  position: absolute;
  right: 0px;
}

.transportation{
  border-top: 1px solid #f1f0f5;
}

.transportation-rules {
  
  padding: 10px;
  color: #666;
  font-size: 14px;
  background-color: white;
}

.select_passagner {
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.select_passsanger_title {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #b31b0b;
}

.select_passsanger_title button {
  border: none;
  background-color: inherit;
}
.icon{
  color: black;
}

.phone_number{
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.phone_number input{
  border: none;
  background-color: inherit;
}

.total-price {
  padding: 10px;
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: #666;
}

.price{
  color: red;
}



.payment-info {
  font-size: 18px;
  font-weight: bold;
  color: #f56c6c;
}


.payment_method_container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 10px;

}
.payment_method{
  width: 100%;
  display: flex;
  align-items: flex-start;
  padding-bottom: 15px;
  border-bottom: 1px solid #dcdfe6;
  color: #bf3b2c;
}

.wechat_pay{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  padding-top: 15px;
  padding-bottom: 5px;
}

.wechat_photo{
  padding-right: 15px;
}
.wechat_photo img{
  border-radius: 5px;
}
.wechat_pay_title{
  color: red;
  padding-bottom: 10px;
}

.wechat_pay_description{
  color: #666;
  font-size: 14px;
}
.correct_icon{
  position: relative;
  left: 250px;
 
  border-radius: 50%;

}
.select_icon{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px; /* 图标宽度 */
  height: 20px; /* 图标高度 */
  background-color: #ed422f; /* 背景颜色 */
  border-radius: 50%; /* 圆角 */
  position: relative;
  padding: 3px;
  color: white;
}

.select_coupon {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  padding: 10px;
  gap: 10px;
  height: 40px;
}

.select_coupon button {
  width: 100%;
  height: 100%;
  border: none;
  background-color: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color:#878787;
  font-size: 1px;
}
.submit-button_1{
  display: flex;
  justify-content: center;
  align-items: center;
}


.submit-button {
  margin-top: 10px;
  width: 90%;
 
  height: 150%;
  background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
  border: none;
  border-radius: 10px;
  color: white;

}

a {
    text-decoration: none;
    color: inherit;
}


</style>