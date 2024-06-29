<template>
  <Header :message="'车票预订'">

  </Header>
  <div class="ticket-booking-page">


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
          {{ chooseRouteStore.depatureTime }}
          <!-- 上车时间 -->
        </div>

      </div>
      <div class="end">
        <div>
          {{ cityStore.selectedEndCity }}
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
            <span>
              <AkQuestion class="question-icon" />
            </span>
            <span>
              购票须知
            </span>
          </RouterLink>
        </div>
      </div>

      <div class="ticket-counter">
        <span>成人票数 <span class="price"> (￥{{ chooseRouteStore.price }}/张)</span> </span>

        <Counter v-model="adultCount" label="成人票数" class="counter" />
      </div>

      <div class="ticket-counter">
        <span>儿童票数<span class="price"> (￥{{ chooseRouteStore.price / 2 }}/张)</span>
        </span>

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
   
      <div class="select_passsanger_title">

        <div class="title">
          选择乘车人
        </div>
        <div>
          <button class="add" @click="addPassanger">
            (添加&修改) <span class="icon"> >></span>
          </button>
        </div>
      </div>
    
    

    <div class="phone_number">
      <div>
        联系人号码
      </div>

      <div>
        <input type="text" placeholder="请输入手机号码" class="input_number">
      </div>
    </div>

    <!-- 提交按钮 -->

    <!-- 订单的总金额 -->

    <div class="total-price">
      <span>
        订单的总金额:
      </span>
      <span class="price">
        ￥{{ totalPrice }}
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
            <el-icon class="el-icon"><Select /></el-icon>
          </span>
        </div>

      </div>
    </div>


    <div class="select_coupon">
      <button class="select_coupon_button" @click="selectCoupon">
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
        <el-icon class="el-icon2"><Select /></el-icon>
        提交订单
      </button>
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
import { useRouteStore } from '@/stores/routeStore';
import { useChooseRouteStore } from '@/stores/chooseRouteStore';

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


function selectCoupon() {
  console.log("选择优惠卷");
  // 选择优惠卷逻辑
  router.push({
    path: '/chooseVoucher',
    
  });

}

function addPassanger() {
  console.log("添加乘客");
  // 添加乘客逻辑
  router.push({
    path: '/addpassnegers',
  });
}

watch(() => route.query, (newQuery) => {
    if (newQuery) {
        const { departurePoint, arrivalPoint, timeRange } = newQuery;
        // 在这里处理传递的数据
        console.log('Departure Point:', departurePoint);
        console.log('Arrival Point:', arrivalPoint);
        console.log('Time Range:', timeRange);
    }
}, { immediate: true, deep: true });

</script>

<style scoped>
.ticket-booking-page {
  padding: 0px;
  background-color: #f5f5f5;
  height: 100vh;
}

.route-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d32f2f;
  /* 背景颜色 */
  color: white;
  /* 字体颜色 */
  padding: 10px;
  /* 内边距 */

}

.route-info>div {
  text-align: center;
  flex: 1;
  /* 确保每个部分占据相同的空间 */
}

.ticket-card {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  background-color: white;
  padding: 10px;
}

.ticket-selection-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
}

.ticket-title {
  font-size: 18px;
  color: red;
}

.ticket-description {
  color: #4096ff;
}

a {
  text-decoration: none;
  color: inherit;
}

.ticket-link {
  display: flex;
  align-items: center;
  justify-content: flex-end;

}

.question-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 5px;
}

.ticket-counter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
}
.price{
  color: #d92825
}
.select_passsanger_title{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #ffffff;
}
.title{
  font-size: 16px;
  color: #878787;
}
.phone_number{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #878787;
  background-color: #ffffff;
}
.total-price{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #878787;
  background-color: #ffffff;
}
.payment_method_container{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  color: #878787;
  background-color: #ffffff;
}
.payment_method{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  color: #b51d09;
  border-bottom: 1px solid #dedede;
  font-size: 15px;
  width: 100%
}
.wechat_pay{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  color: #878787;
  background-color: #ffffff;
  
}
.wechat_pay_title{
  color: #d92825;
  padding-left: 10px; 
  padding-bottom: 5px;
  font-size: 14px;

}
.wechat_pay_description{
  padding-top: 5px;
  padding-left: 10px; 
  color: inherit;
  font-size: 12px;
}

.correct_icon{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  color: white;
  background-color: #d92825;
  border: 1px solid #dedede;
  border-radius: 50%;
  font-size: 18px;
}
.el-icon{
  display: flex;
  align-items: center;
  justify-content: center;
}

.wechat_photo{
  display: flex;
  border: 1px solid #dedede;
  border-radius: 50%;
  font-size: 20px;
}

.select_coupon{
  width: 100%; /* 确保父div占据可用宽度 */
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #878787;
  background-color: #ffffff;
}
.select_coupon_button{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  padding-left: 0px;
  border: none;
  background-color: #ffffff;
}

.submit-button_1{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}


.submit-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 90%;
  padding: 10px;
  height: 150%;
  background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
  border: none;
  border-radius: 10px;
  color: white;

}
.el-icon2{
  margin-right: 15px;
  border: 1px solid white;
  border-radius: 50%;
}

.add{
  border: none;
  background-color: inherit;
  padding: 0;
}
.input_number{
  border: none;
  background-color: inherit;
  padding: 0;
  
}

.select_coupon_button :nth-child(1) {
  font-size: 15px;
}
</style>