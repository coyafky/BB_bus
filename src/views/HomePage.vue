<template>
  <div class="container">

      <a href="https://github.com/coyafky/BB_bus">
        <div class="photo">
          <img src="../assets/image/homepage.png" alt="">
        </div>
      </a>
   
    <div class="notice">
      
      <div>
        <McAnnouncementLine/>
        公告 
      </div>
      <RouterLink to="/TicketImformation">
         用户须知
      </RouterLink>
    </div>

    <div class="select">
      <div class="start">
        <AkCircle />
        <!-- 点击后，进入到选择起点页面 -->
        <RouterLink to="/Start">
          起点:
        </RouterLink>
        <div class="city">
          <span>{{ cityStore.selectedStartCity }}</span>
        </div>
      </div>

      <div class="end">
        <AnOutlinedMinusCircle />
        <RouterLink to="/End">
          终点:
        </RouterLink>
        <div class="city">
          <span>{{ cityStore.selectedEndCity }}</span>
        </div>
      </div>

      <div class="change">
        <!-- 设计一个转换按钮 -->
        <el-button type="primary" @click="changeStartAndEnd" class="changebutton">转换</el-button>
      </div>

      <div class="time">
        <div class="demo-date-picker">
          <div class="block">
            <span class="demonstration">
              <AnOutlinedClockCircle />
              时间：
            </span>
            <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" class="time-picker" />
          </div>
        </div>
      </div>

      <div class="search">
        <el-button type="primary" @click="handleSearch">查询</el-button>
      </div>
    </div>

   <footer class="footer-container">
    <Footer class="footer" />
   </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Footer from '@/components/Footer.vue'
import { RouterLink } from 'vue-router';
import { AkCircle } from "@kalimahapps/vue-icons";
import { AnOutlinedMinusCircle } from "@kalimahapps/vue-icons";
import { AnOutlinedClockCircle } from "@kalimahapps/vue-icons";
import { McAnnouncementLine } from "@kalimahapps/vue-icons";
import { useCityStore } from '../stores/cityStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const cityStore = useCityStore();
const value1 = ref(new Date()) // 设置默认日期为当前日期

const isSearchReady = computed(() => {
  return cityStore.selectedStartCity && cityStore.selectedEndCity && value1.value;
});

// 处理查询按钮点击事件
const handleSearch = () => {
  if (isSearchReady.value) {
    // 所有条件满足，导航到查询页面
    router.push('/QueryPage'); // 假设你的查询页面路由是 /SearchPage
  } else {
    // 条件不满足，显示提示信息或执行其他操作
    alert('请选择起点城市、终点城市和上车时间');
  }
};

const changeStartAndEnd =()=>{
  const temp = cityStore.selectedStartCity;
  cityStore.selectedStartCity = cityStore.selectedEndCity;
  cityStore.selectedEndCity = temp;
}


</script>

<style scoped>

.container{
  display: flex;
  flex-direction: column;
  
}

.photo{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img{
  width: 100%;
  height: 100%;
}

.notice{
  display: flex;
  font-size: 20px;
  
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: beige;
}


.notice a{
  margin-left: 10px;
}




.start{
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.start a{
  margin-left: 10px;
}

.end{
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.end a{
  margin-left: 10px;
}

.time{
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.time a{
  margin-left: 20px;
 
}

.search {
  display: flex;
  justify-content: center; /* 居中对齐按钮 */
  align-items: center; /* 垂直居中对齐按钮 */
  width: 100%; /* 确保容器宽度为100% */
  
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.search .el-button {
  width: 100%; /* 设置按钮宽度为100% */
  height: 40px;
  font-size: 20px;
  border-radius: 10%;
}

.city{
  color: black;
  margin-left:30px;
}




.change{

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 100%;
}

.changebutton{
  width: 100%;
  height: 100%;
  margin: 10px;
  border-radius: 10px;
  height: 40px;
  font-size: 20px;
}







</style>