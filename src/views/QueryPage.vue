<template>
    <div class="container">
        <!-- 查询页 -->

        <!-- 返回组件 -->

        <!-- 起点名字，终点城市渲染的名字 -->
        <div class="header">
            <goback class="goback" />
            <div class="city-container">
                <span>
                    {{ startCity }}
                </span>

                <span>
                    -
                </span>
                <span>
                    {{ endCity }}
                </span>
            </div>
        </div>


        <div class="date_container">
            <div class="previous_div">
                <button @click="getPreviousDay" class="previous">
                    前一天
                </button>
            </div>
            <div class="vertical-line"></div>
            <div class="showdate">
                <el-icon>
                    <Calendar />
                </el-icon>
                <span>
                    {{ formattedDate }}
                </span>
                <span>
                    ({{ dayOfWeek }})
                </span>
            </div>

            <div class="vertical-line"></div>
            <div class="next_div">
                <button @click="getNextDay" class="next">
                    后一天
                </button>
            </div>

        </div>
        <div class="fliter">
            <div class="query-item">
                <button class="allbus">
                    <TaTopologyBus />
                    所有班次
                </button>
            </div>
            <div class="query-item">

                <button @click="Timefilter">
                    <CiTimer />
                    时间段筛选
                </button>
                <!-- 跳转到时间段筛选夜间 -->
            </div>
            <div class="query-item">

                <!-- 跳转到上车点筛选页面 -->

                <button @click="StartPointfilter">
                    <IcSolidRhombusArrowRight />
                    上车点筛选
                </button>
            </div>
            <div class="query-item">

                <!--  -->
                <button @click="EndPointfilter">
                    <MdRoundPinDrop />
                    下车点筛选
                </button>

            </div>
        </div>


        <div class="container">
            <!-- 其他代码 -->
            <div class="card_container">
                <Card v-for="route in filteredRoutes" :key="route.id" :route="route"  class="card" />
            </div>
        </div>

    </div>


</template>

<script setup>
import { ref, computed, provide, onMounted } from 'vue';
import goback from '@/components/goback.vue';
import { useCityStore } from '../stores/cityStore';
import { useDeparturePointStore } from '../stores/departurePointStore';
import { RouterView, RouterLink } from 'vue-router';
import { CiTimer } from "@kalimahapps/vue-icons";
import { MdRoundPinDrop } from "@kalimahapps/vue-icons";
import { IcSolidRhombusArrowRight } from "@kalimahapps/vue-icons";
import { TaTopologyBus } from "@kalimahapps/vue-icons";
import { Calendar } from '@element-plus/icons-vue';

import { useRouter } from 'vue-router';
import axios from 'axios';
import Card from '@/components/Card.vue';

const cityStore = useCityStore();
const departurePointStore = useDeparturePointStore();
const router = useRouter();

// 从Pinia中获取城市信息
const startCity = computed(() => cityStore.selectedStartCity);
const endCity = computed(() => cityStore.selectedEndCity);

const value1 = ref(new Date());
const currentTime = ref(new Date());
const routes = ref([]);

const dayOfWeek = computed(() => {
    const date = new Date(value1.value);
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    return `星期${days[date.getDay()]}`;
});

const formattedDate = computed(() => {
    const date = new Date(value1.value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以需要+1
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
});

const fetchRoutes = async () => {
  try {
    console.log('Fetching routes...');
    const response = await axios.get('http://localhost:3000/routes', {
      params: {
        start: startCity.value,
        end: endCity.value
      }
    });
    console.log('Routes fetched:', response.data);
    routes.value = response.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
  }
};

onMounted(() => {
  fetchRoutes();
  // 确保 selectedDeparturePoint 是从 store 中获取的
  const selectedDeparturePoint = departurePointStore.selectedDeparturePoint;
  console.log('Selected Departure Point:', selectedDeparturePoint);
});

const filteredRoutes = computed(() => {
  const selectedDeparturePoint = departurePointStore.selectedDeparturePoint;
  if (!selectedDeparturePoint) return routes.value;
  if (!routes.value) return []; // 确保 routes.value 不是 undefined 或 null
  return routes.value.map(route => ({
    ...route,
    schedules: route.schedules.filter(schedule => 
      schedule.departurePoints.includes(selectedDeparturePoint)
    )
  })).filter(route => route.schedules.length > 0);
});

provide('routes', routes);

function getPreviousDay() {
  value1.value.setDate(value1.value.getDate() - 1);
}

function getNextDay() {
  value1.value.setDate(value1.value.getDate() + 1);
}

function Timefilter() {
  router.push('/Timeperiodfilter');
}

function StartPointfilter() {
  router.push('/StartPiontPicker')
}

function EndPointfilter() {
  router.push('/EndPiontPicker')
}
</script>



<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: #f0f0f2;

}

.header {
    display: flex;
    flex-direction: row;
    background-color: #d92a27;
    color: white;
    padding: 10px;
    position: relative;

}

.city-container {
    font-size: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.date_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: white;
    border-bottom: 1px solid #f0f0f2;

    max-height: 55px;
    min-height: 50px;
    height: 100%;
    /* 设置总的div高度为100% */

}

.date_container>div {
    flex: 0;
    /* 设置每个子div的flex比例为1，平均占据可用空间 */
    display: flex;
    justify-content: center;
    align-items: center;
}

.date_container>div:nth-child(1),
.date_container>div:nth-child(5) {
    flex: 2;
    /* 让第一个和第三个子div占据1/5的比例 */
    display: flex;
    align-items: center;
    justify-content: center;
}

.date_container>div:nth-child(3) {
    flex: 5;
    /* 让第二个子div占据3/5的比例 */
    color: #d92a27;
    font-size: 20px;

}

.vertical-line {

    border-left: 1px solid #dedede;
    /* 设置竖线的样式，可以调整颜色和粗细 */
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.date_container button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: inherit;
    width: auto;
    width: 100%
}

.showdate el-icon {
    padding-right: 5px;
}

.showdate span {
    padding-right: 5px;
}

.previous {
    align-items: center;
    justify-content: center;
    color: #a8a8a8;
}

.fliter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: white;
    border-bottom: 1px solid #f0f0f2;
    height: 50px;
}

.query-item button {
    display: flex;
    border: none;
    background-color: inherit;
}

.allbus {
    color: #c95353
}

.next {
    color: #c95353
}
.card{
    margin-bottom: 10px
}
</style>