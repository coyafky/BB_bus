<template>
  <div class="container">

    <div class="header-container">
      <a href="https://github.com/coyafky/BB_bus">
        <div class="photo">
          <img src="../assets/image/homepage.jpg" alt="">
        </div>
      </a>
      <div class="notice">

        <button @click="navigateToTicketInformation" class="notice-button">
          <McAnnouncementLine class="notice-icon" />
          <span class="notice-span">
            公告
          </span>
          <span>
            用户购票须知
          </span>
          <div>
            !
          </div>

          <div>
            !
          </div>

          <div>
            !
          </div>
        </button>

      </div>
      <div class="select">
        <div class="start">
          <van-icon name="circle" class="circle1" />
          <!-- 点击后，进入到选择起点页面 -->
          <button @click="navigateToStart" class="start-button">
            <div class="start_notice">
              起点：
            </div>
            <div class="city">
              {{ cityStore.selectedStartCity }}
            </div>
          </button>

        </div>

        <div class="end">
          <van-icon name="circle" class="circle2" />
          <button @click="navigateToEnd" class="end-button" placeholder="请选择目的地">
            <div class="end_notice">
              终点：
            </div>
            <div class="city">
              <span>{{ cityStore.selectedEndCity }}</span>
            </div>

          </button>
        </div>

        <div class="time">
          <div>
            <van-icon name="clock-o" class="small-icon" />
          </div>
          <div class="time_all">

            <div class="time_notice">
              时间:
            </div>
            <van-cell :value="date" @click="show = true" class="cell">

            </van-cell>


            <div class="current-dayofweek">
              ({{ getWeekDays() }})

            </div>
            <van-calendar v-model:show="show" @confirm="onConfirm" />
          </div>

        </div>



        <div class="change">
          <button @click="changeStartAndEnd" class="change_button">
            <van-icon name="sort" class="larger-icon" />
          </button>
        </div>

        <div class="search">
          <button @click="handleSearch" class="serach_button">
            <van-icon name="search" />
            立即查询
          </button>
          <!-- 点击查询之后把 selectedStartCity 和 selectedEndCity 传给 Search.vue 获取对应schedule的数据 传入这部分数据进入到Pinia中-->
        </div>
      </div>

    </div>

    <footer class="footer-container">
      <Footer class="footer" />
    </footer>
  </div>
</template>


<script setup>
import { ref, computed, onMounted } from 'vue'
import Footer from '@/components/Footer.vue'

import { McAnnouncementLine } from "@kalimahapps/vue-icons";
import { useCityStore } from '../stores/cityStore';
import { useRouter } from 'vue-router';
import { ShoppingCart } from '@element-plus/icons-vue';
import { useDateStore } from '@/stores/dateStore';


const router = useRouter();

const cityStore = useCityStore();
const dateStore = useDateStore();


const date = ref(new Date().toISOString().split('T')[0]); // 设置初始日期为当前日期
const show = ref(false); // 控制日历组件的显示状态
const daysInEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const formatDate = (date) => {
  // 格式化日期为 "YYYY-MM-DD" 的字符串
  const year = date.getFullYear();

  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};


// 设置默认日期

const today = new Date();
date.value = formatDate(today);
dateStore.setSelectedDate(date.value);


const onConfirm = (value) => {
  // 用户确认选择日期后，关闭日历并更新日期显示
  show.value = false;
  date.value = formatDate(value);

  dateStore.setSelectedDate(date.value);  // 将date传入到pinia中

};
const getWeekDays = () => {
  const currentDate = new Date(date.value);
  const dayOfWeek = daysInEnglish[currentDate.getDay()];

  dateStore.setSelectedDayOfWeek(dayOfWeek);  // 将dayOfWeek传入到pinia中
  return dayOfWeek;
};






function navigateToTicketInformation() {
  router.push('/TicketInformation');
}

function navigateToStart() {
  router.push('/Start');
}

function navigateToEnd() {
  router.push('/End');
}

const isSearchReady = computed(() => {
  return cityStore.selectedStartCity && cityStore.selectedEndCity
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

const changeStartAndEnd = () => {
  const temp = cityStore.selectedStartCity;
  cityStore.selectedStartCity = cityStore.selectedEndCity;
  cityStore.selectedEndCity = temp;
}






</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f1f0f5
}

.photo {
  width: 100%;
  height: auto;
  /* 让高度根据宽度自动调整 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo img {
  width: 100%;
  /* 使用百分比宽度 */
  height: 100%;
  /* 让高度根据宽度自动调整 */
  object-fit: cover;
  /* 或 contain */
}

.header-container {
  display: flex;
  flex: 1;
  /* 使用 flex: 1 来让子元素自动分配空间 */
  flex-direction: column;

}


.notice {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  text-align: center;

  font-size: 18px;

  background-color: #fff8d4;
}

.notice-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: auto;
  margin-right: 5px;
  font-size: 20px;

}

.notice-button {
  display: flex;
  border: none;
  background-color: inherit;

  text-decoration: none;
  /* 去除下划线 */
  color: #ff8126;
  /* 继承父元素的颜色 */
  width: 100%;
  height: auto;
}

.notice-button div {
  display: flex;
  margin-left: 10px;
  text-align: center;
  justify-content: center;
  align-self: center;
}


.notice-span {
  margin-right: 20px;
}

/* vue中消除router Link的默认样式 */

.select {
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  padding: 25px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  max-height: fit-content;
}

.start {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  font-size: medium;
  padding: 10px;
  padding-left: 0px;

}

.start-button {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  width: 60%;
  height: 100%;
  background-color: inherit;
  border-bottom: 1px solid #ededed;
  margin: 10px;
  /* 上下左右的边距都是10px */
  font-size: medium;
  padding-left: 0px;
}

.start_notice {
  color: #666666
}

.end {

  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  font-size: medium;
  padding: 10px;
  padding-left: 0px;

}

.end-button {
  display: flex;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: none;
  width: 60%;
  height: 100%;
  background-color: inherit;
  border-bottom: 1px solid #ededed;
  margin: 10px;
  /* 上下左右的边距都是10px */
  font-size: medium;
  padding-left: 0px;
}

.end_notice {
  color: #666666;
}

.city {
  color: #666666;
}
.time {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  font-size: medium;
  padding: 10px;
  flex-direction: row;
  padding-left: 0px;
}
.time_notice {
  color: #666666;
  padding: 10px;
}

.time_all {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ededed;
  flex-grow: 1;
}

.current-dayofweek {
  color: #666666;
}



.cell {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: auto;
}






.circle1 {
  color: #8ec257;
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
  
}

.circle2 {
  color: #f83600;
  margin-right: 10px;
  font-weight: bolder;
  font-size: 20px;
}

.small-icon {
  margin-right: 10px;
  color: white;
  background: #aab2bd;
  border-radius: 50%;
  font-size: 20px;
}




.change {
  display: flex;
  text-align: center;
  position: absolute;
  top: 20%;
  right: 10%;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
}

.change_button {

  width: 100%;
  /* 设置按钮的宽度 */
  height: 100%;
  /* 设置按钮的高度 */
  border-radius: 50%;
  /* 设置为50%以创建圆形 */
  background-color: #d6d6d6;
  /* 设置背景颜色，以便看到效果 */
  color: #fff;
  /* 设置字体颜色 */
  border: none;
  /* 移除边框 */
  display: flex;
  /* 使用Flexbox布局 */
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */

}


.search {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: medium;
}

.serach_button {
  width: 100%;
  height: 150%;
  background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
  border: none;
  border-radius: 10px;
  color: white;

}






.clock_icon {
  background-color: #aab2bd;
  font-size: bold;
  border-radius: 50%;
  color: white;
}

a {
  text-decoration: none;
  color: inherit;
}


.larger-icon {
  font-size: 40px;
}
</style>