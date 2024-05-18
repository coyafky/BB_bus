<template>
    <div>
      <el-row>
        <el-col :span="24">
          <el-header>
            <el-button type="text" @click="$router.go(-1)">返回</el-button>
            <span>车票预订</span>
          </el-header>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <el-descriptions title="车站信息">
              <el-descriptions-item label="出发站">{{ station.departure }}</el-descriptions-item>
              <el-descriptions-item label="出发时间">{{ station.departure_time }}</el-descriptions-item>
              <el-descriptions-item label="到达站">{{ station.arrival }}</el-descriptions-item>
              <el-descriptions-item label="到达时间">{{ station.arrival_time }}</el-descriptions-item>
            </el-descriptions>
          </el-card>
        </el-col>
      </el-row>

      <el-row>
          <el-card class="ticket-card">
              <div>
                票数选择
                <RouterLink to="/useragreement">
                  <AkQuestion/>
                购票须知
                </RouterLink>
              </div>

           
        <div>
          <Counter v-model="adultCount" label="成人票数" price="180"/>
        </div>

        <div>
          儿童票数￥100/张
          <Counter v-model="childCount" label="儿童票数" price="120"/>
        </div>

        
          </el-card>
      </el-row>

      <el-row>
        <el-text>
          交通部规定：儿童和婴儿乘车必须有成年人陪同，请带儿童或婴儿的乘客在购票时购买儿童或婴儿票。(1米2以上视作成人)
        </el-text>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-form label-width="100px">
            <el-form-item label="乘车人">
              <el-input v-model="passenger.name" placeholder="请输入乘车人姓名"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="passenger.phone" placeholder="请输入乘车人手机号"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
              <el-input v-model="passenger.id_card" placeholder="请输入乘车人身份证号"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <el-button type="danger" round @click="onSubmit">提交订单</el-button>
        </el-col>
      </el-row>
    </div>

      <div>
        订单的总金额 {{ totalPrice }}
      </div>

      <div>
        支付方式
        点击后跳转到支付页面
        选择支付方式（微信支付，支付宝支付）
      </div>
  </template>
  
<script setup>
import { ref ,computed} from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import axios from 'axios';
import { AkQuestion } from "@kalimahapps/vue-icons";
import  Counter from '@/components/CounterTicket.vue';
import { provide } from 'vue';
const router = useRouter();

const station = ref({
  departure: '',
  arrival: '',
  departure_time: '',
  arrival_time: ''
});

// 定义计数器状态
const adultCount = ref(0);
const childCount = ref(0);



const passenger = ref({
  name: '',
  phone: '',
})

// 假设成人票价为180元/张，儿童票价为100元/张
const adultPrice = ref(180);
const childPrice = ref(100);
// 计算总金额
const totalPrice = computed(() => {
  console.log('adultCount:', adultCount.value);
  console.log('adultPrice:', adultPrice.value);
  console.log('childCount:', childCount.value);
  console.log('childPrice:', childPrice.value);
  const total = adultCount.value * adultPrice.value + childCount.value * childPrice.value;
  console.log('totalPrice:', total);
  return total;
});

provide('counterValues', {
  adultCount,
  childCount,
});

</script>

<style  scoped>

</style>