<template>
  <div class="container">

    <div class="header-container">
      <a href="https://github.com/coyafky/BB_bus">
        <div class="photo">
          <img src="../assets/image/homepage.jpg" alt="">
        </div>
      </a>
      <div class="notice">
          
          
          <RouterLink to="/TicketImformation" class="notice-link">
            <McAnnouncementLine />
           <span class="notice-span">
            公告
           </span>
            用户购票须知
          </RouterLink>
      
      </div>
      <div class="select">
        <div class="start">
          <van-icon name="circle" class="circle1" />
          <!-- 点击后，进入到选择起点页面 -->
          <RouterLink to="/Start">
            起点:
          </RouterLink>
          <div class="city">
            <span>{{ cityStore.selectedStartCity }}</span>
          </div>
        </div>
        <van-divider />
        <div class="end">
          <van-icon name="circle" class="circle2" />
          <RouterLink to="/End">
            终点:
          </RouterLink>
          <div class="city">
            <span>{{ cityStore.selectedEndCity }}</span>
          </div>

        </div>



        <van-divider />

        <div class="time">
          <div class="demo-date-picker">
            <div class="block">
              <span class="demonstration">
                <span>
                  <van-icon name="clock-o" class="clock_icon" />
                </span>
                <span>
                  时间：
                </span>
              </span>
              <el-date-picker v-model="value1" type="date" placeholder="Pick a day" :size="size" class="time-picker" />
              <span>
                （{{ currentDayOfWeek }}）
              </span>
            </div>
          </div>

        </div>

        <van-divider />

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
        </div>


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

function getDayOfWeek(date) {
  const daysOfWeek = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return daysOfWeek[date.getDay()];
}
// 使用computed来创建一个响应式的currentDayOfWeek，它会自动更新当value1改变时
const currentDayOfWeek = computed(() => {
  return getDayOfWeek(value1.value);
});

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

const changeStartAndEnd = () => {
  const temp = cityStore.selectedStartCity;
  cityStore.selectedStartCity = cityStore.selectedEndCity;
  cityStore.selectedEndCity = temp;
}

const show = ref(false);
const showPopup = () => {
  show.value = true;
};


</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;


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
 
  font-size: 18px;

  background-color: #fff8d4;
}

.notice-link {
  margin-left: 20px;
  text-decoration: none;
  /* 去除下划线 */
  color: #ff8126;
  /* 继承父元素的颜色 */
}

.notice-span{
  margin-right: 20px;
}

/* vue中消除router Link的默认样式 */

.select {
  position: relative;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  padding: 25px;
  display: flex;
  flex: 3;
  flex-direction: column;
}

.start {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  font-size: medium;
  padding: 10px;


}

.end {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: medium;
}

.circle1 {
  color: green;
  margin-right: 10px;
  font-weight: bold;
}

.circle2 {
  color: #f83600;
  margin-right: 10px;
  font-weight: bolder;
}

.city {
  margin-left: 20px;
}

.change {
  display: flex;
  text-align: center;
  position: absolute;
  top: 8%;
  right: 15%;
  width: 100px;
  height: 100px;
  border-radius: 100%;
}

.change_button {
  width: 60px;
  /* 设置按钮的宽度 */
  height: 60px;
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




.time {
  display: flex;
  justify-self: start;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  font-size: medium;
}

.demonstration span {

  margin-right: 10px;
}


@media (max-width: 768px) {
  .header-container {
    flex: 2;
    /* 在小屏幕上减少 header 的占用空间 */
  }

  .select {
    flex: 2;
    /* 在小屏幕上减少 select 的占用空间 */
  }
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

el-date-picker {
  border: none;
}

.larger-icon {
  font-size: 40px;
}
</style>