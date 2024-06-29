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
                <button :disabled="isPreviousDayDisabled" :style="{ color: isPreviousDayDisabled ? '#666666' : '#d92a27' }" @click="getPreviousDay">前一天</button>
            </div>
            <div class="vertical-line"></div>
            <div class="showdate">
                <el-icon>
                    <Calendar />
                </el-icon>
                <span class="date">
                    {{ dateStore.selectedDate }}
                </span>
                <span class="dayofweek">
                    ({{ dateStore.selectedDayOfWeek }})
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
                    <div class="fliter_icon">
                        <TaTopologyBus />
                    </div>
                    <div class="fliter_text">
                        所有班次
                    </div>
                </button>
            </div>
            <div class="query-item">

                <button @click="Timefilter" class="time_filter">
                    <div class="fliter_icon">
                        <van-icon name="clock-o" />
                    </div>
                    <div>
                        时间段筛选
                    </div>
                </button>
                <!-- 跳转到时间段筛选夜间 -->
            </div>
            <div class="query-item">

                <!-- 跳转到上车点筛选页面 -->

                <button @click="StartPointfilter" class="start_point_filter">
                    <div class="fliter_icon">
                        <van-icon name="play-circle-o" />
                    </div>
                    <div class="fliter_text">
                        上车点筛选
                    </div>
                </button>
            </div>
            <div class="query-item">

                <!--  -->
                <button @click="EndPointfilter"  class="end_point_filter">
                   <div class="fliter_icon">
                    <MdRoundPinDrop />
                   </div>
                    <div class="fliter_text">
                        下车点筛选
                    </div>
                </button>

            </div>
        </div>


        <div class="maybe_container">

            <div v-if="routeStore.status === '无班次'">
                <!-- 这个页面展示空组件  表示没有获取到班次信息  检测到 获取route中status="无班次"-->
                 <EmptyComponent/>
            </div>

            <!-- 表示非空，并且渲染 route中的其他信息 -->
            <div  v-else  class="card_container">

                <Card class="card" >
                    
                </Card>
            </div>
        </div>

    </div>


</template>

<script setup>
import { ref, computed, provide, onMounted ,watch } from 'vue';
import goback from '@/components/gobackforquerypage.vue';

import { useCityStore } from '../stores/cityStore';
import { useDeparturePointStore } from '../stores/departurePointStore';
import { useRouteStore } from '@/stores/routeStore';
import { useDateStore } from '@/stores/dateStore';

import { useRoute } from 'vue-router';
import { MdRoundPinDrop } from "@kalimahapps/vue-icons";

import { TaTopologyBus } from "@kalimahapps/vue-icons";

import { Calendar } from '@element-plus/icons-vue';

import EmptyComponent from '@/components/EmptyComponent.vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Card from '@/components/Card.vue';

const cityStore = useCityStore();
const departurePointStore = useDeparturePointStore();
const routeStore = useRouteStore();
const route = useRoute();

const router = useRouter();
const dateStore = useDateStore();

const date = ref(dateStore.selectedDate); // 从Pinia存储中获取日期

const daysInEnglish = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// 从Pinia中获取城市信息
const startCity = computed(() => cityStore.selectedStartCity);
const endCity = computed(() => cityStore.selectedEndCity);







const getWeekDays = () => {
    const currentDate = new Date(date.value);
    const dayOfWeek = daysInEnglish[currentDate.getDay()];

    dateStore.setSelectedDayOfWeek(dayOfWeek);  // 将dayOfWeek传入到pinia中
    return dayOfWeek;
};


const formatDate = (date) => {
    // 格式化日期为 "YYYY-MM-DD" 的字符串
    const year = date.getFullYear();

    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
// 获取前一天的日期
const getPreviousDay = () => {
    const selectedDateObj = new Date(date.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 设置时间为00:00:00，以便进行日期比较
        // 调整到北京时间
    const offset = 8; // 北京时区偏移量（UTC+8）
    const beijingTime = new Date(today.getTime() + offset * 60 * 60 * 1000);

    if (selectedDateObj.getTime() <=  beijingTime.getTime()) {
        // 如果选择的日期是今天或更早，前一天按钮不可点击
        return;
    }
    selectedDateObj.setDate(selectedDateObj.getDate() - 1);
    const formattedDate = formatDate(selectedDateObj);
    date.value = formattedDate;
    dateStore.setSelectedDate(formattedDate); // 更新日期
    dateStore.setSelectedDayOfWeek(getWeekDays());
    
}

// 获取后一天的日期
const getNextDay = () => {
    const selectedDateObj = new Date(date.value);
    selectedDateObj.setDate(selectedDateObj.getDate() + 1);
    const formattedDate = formatDate(selectedDateObj);
    date.value = formattedDate;
    dateStore.setSelectedDate(formattedDate); // 更新日期
    dateStore.setSelectedDayOfWeek(getWeekDays());
};

const isPreviousDayDisabled = computed(() => {
    const selectedDateObj = new Date(date.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // 设置时间为00:00:00，以便进行日期比较
    const offset = 8; // 北京时区偏移量（UTC+8）
    const beijingTime = new Date(today.getTime() + offset * 60 * 60 * 1000);

    return selectedDateObj.getTime() <= beijingTime.getTime();
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
        const routesData = response.data[0]; // 假设数据总是以数组形式返回，且至少有一个元素

        // 获取 start, end, status 的值
        const start = routesData.start;
        const end = routesData.end;
        const status = routesData.status;
        routeStore.setStatus(status);
        if(status === "有班次"){
            const arrivalPoint = routesData.arrivalPoints;
        const departurePoints = routesData.departurePoints;

        const Allschedules = routesData.weeklyScheduleOverview[dateStore.selectedDayOfWeek];

        routeStore.setStart(start);
        routeStore.setEnd(end);
        
        routeStore.setSchedules(Allschedules);
        routeStore.setDeparturePoints(departurePoints);
        routeStore.setArrivalPoints(arrivalPoint);

        console.log('Start:', start);
        console.log('End:', end);
        console.log('Status:', status);
        console.log("week", Allschedules);
        console.log(Allschedules[0]);
        // 其他操作...
        console.log(routeStore.start);
        console.log(routeStore.end);
        console.log(routeStore.status);
        console.log(arrivalPoint);
        console.log(departurePoints);
        console.log(routeStore.departurePoints);
        console.log(routeStore.arrivalPoints);
        console.log(routeStore.schedules);
        for (let i = 0; i < routeStore.schedules.schedules.length; i++) {
            console.log(routeStore.schedules.schedules[i]);
            // 处理每个对象的属性
            // 在pinia中存储schedules每个对象
        }


        console.log('Departure Start Time:', Allschedules.schedules[0].departureStartTime);
        console.log('Departure End Time:', Allschedules.schedules[0].depatureEndTime);
        console.log('Departure Points:', Allschedules.schedules[0].departurePoints);
        console.log('Arrival Points:', Allschedules.schedules[0].arrivalPoints);
        console.log('Price:', Allschedules.schedules[0].price);
        console.log('---');
        }

    } catch (error) {
        console.error('Error fetching routes:', error);
    }
};

fetchRoutes();



function Timefilter() {
    router.push('/Timeperiodfilter');
}

function StartPointfilter() {
    router.push('/StartPiontPicker')
}

function EndPointfilter() {
    router.push('/EndPiontPicker')
}





// 监听路由变化
watch(() => route.query, (newQuery) => {
    if (newQuery.departurePoint) {
        const departurePoint = newQuery.departurePoint;
        // 在这里处理传递的上车点数据
        console.log('Departure Point:', departurePoint);
    }

    if (newQuery.arrivalPoint) {
        const arrivalPoint = newQuery.arrivalPoint;
        // 在这里处理传递的下车点数据
        console.log('Arrival Point:', arrivalPoint);
    }

    if (newQuery.startTime && newQuery.endTime) {
        const startTime = newQuery.startTime;
        const endTime = newQuery.endTime;
        // 在这里处理传递的时间范围数据
        console.log('Start Time:', startTime);
        console.log('End Time:', endTime);

    }

}, { immediate: true, deep: true });



</script>



<style scoped>
/* 基本的样式 */
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
}

.date_container > div {
    flex: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.date_container > div:nth-child(1),
.date_container > div:nth-child(5) {
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.date_container > div:nth-child(3) {
    flex: 5;
    color: #d92a27;
    font-size: 20px;
}

.vertical-line {
    border-left: 1px solid #dedede;
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
    width: 100%;
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
.previous_div button{
    font-size: 15px;
}

.fliter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: white;
    height: 35px;
}

.query-item button {
    display: flex;
    border: none;
    background-color: inherit;
}

.allbus {
    color: #c95353;
    display: flex;
    justify-content: center;
    align-items: center;
}

.time_filter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
}

.start_point_filter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
}

.end_point_filter {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8c8c8c;
}

.fliter_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 5px;
}

.next {
    color: #c95353;
    font-size: 15px;
}


.card_container{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.card{
    width: 100%;
    max-width: 100%; /* 确保不会超出父容器的宽度 */
}
.date{
    font-size: 16px;
}
.dayofweek{
    font-size: 16px;
}
/* 移动端适配 */
@media (max-width: 600px) {
    .header {
        padding: 5px;
    }

    .city-container {
        font-size: 20px;
    }

    .date_container {
        max-height: 45px;
        min-height: 40px;
    }

    .date_container > div:nth-child(3) {
        font-size: 18px;
    }

    .fliter {
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;
        height: 30px;
    }

    .query-item button {
        font-size: 14px;
    }

    .card {
        margin-top: 1px;
    }
}
@media (max-width: 390px) {
    .fliter_text {
        font-size: 12px;
    }
}
</style>