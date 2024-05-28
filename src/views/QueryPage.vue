<template>
    <div>
        <!-- 查询页 -->

        <!-- 返回组件 -->

        <!-- 起点名字，终点城市渲染的名字 -->
        <div class="header">
            <goback />

            <div class="city-container">
                <span>
                    {{ startCity }}
                </span>

                <span>
                    <IcSolidRhombusArrowRight />
                </span>
                <span>
                    {{ endCity }}
                </span>
            </div>
        </div>


        <div class="time-container">
            <div class="time-item">
                <!-- button ，使得value1 -->
                <RouterLink to="/querytime">
                    <button>
                        前一天
                    </button>
                </RouterLink>


            </div>
            <div class="time-item2">
                <div class="block">
                    
                    <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time" />
                    <span> {{ dayOfWeek }}</span>
                </div>

            </div>
            <div class="time-item">
                <RouterLink to="/querytime">
                    <button>
                        后一天
                    </button>
                </RouterLink>

            </div>


        </div>
        <el-divider />
        <div class="query-container">
            <div class="query-item">
                <TaTopologyBus />
                所有班次
            </div>
            <div class="query-item">
                <CiTimer />
                <RouterLink to="/Timeperiodfilter">

                    时间段筛选

                </RouterLink>
                <!-- 跳转到时间段筛选夜间 -->
            </div>
            <div class="query-item">

                <!-- 跳转到上车点筛选页面 -->
                <RouterLink to="">
                    <IcSolidRhombusArrowRight />
                    上车点筛选

                </RouterLink>
            </div>
            <div class="query-item">
                <MdRoundPinDrop />
                <!--  -->
                <RouterLink to="">
                    下车点筛选
                </RouterLink>

            </div>
        </div>
        <el-divider />
        <div class="card">
            1
        </div>
        <div class="card">
            <!-- 如果是深圳->珠海，从数据库中获取深圳起点-到珠海的班次信息
            深圳到珠海的时间信息
            深圳到珠海的价格信息
            深圳到珠海的出发时间信息 -->
            2

        </div>
        <div class="card">
            3
        </div>
        <div class="card">
            4
        </div>
        <div class="card">
            5
        </div>

    </div>


</template>

<script setup>
import { ref, computed, provide } from 'vue';
import goback from '@/components/goback.vue';
import { useCityStore } from '../stores/cityStore';
import { RouterView, RouterLink } from 'vue-router';
import { CiTimer } from "@kalimahapps/vue-icons";
import { MdRoundPinDrop } from "@kalimahapps/vue-icons";
import { IcSolidRhombusArrowRight } from "@kalimahapps/vue-icons";
import { TaTopologyBus } from "@kalimahapps/vue-icons";
const cityStore = useCityStore();

const startCity = computed(() => cityStore.selectedStartCity);
const endCity = computed(() => cityStore.selectedEndCity);


const value1 = ref(new Date());
const currentTime = ref(new Date());
const route = ref('/');
provide('route', route);

const updateTime = (direction) => {
    const newTime = direction === 'previous'
        ? new Date(currentTime.value)
        : new Date(currentTime.value);

    if (direction === 'previous') {
        newTime.setDate(newTime.getDate() - 1);
    } else {
        newTime.setDate(newTime.getDate() + 1);
    }

    currentTime.value = newTime;
    value1.value = newTime;
};

const dayOfWeek = computed(() => {
    const date = new Date(value1.value);
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    return `星期${days[date.getDay()]}`;
});

// 如何从数据库中获取citis数据


// const selectedCity = cities.find(city => city.name === startCity);
// axios.get('http://localhost:3000/cities').then(
//     response => {
//         const cities = response.data;
//         // 处理返回的城市数据
//         console.log(cities);
//     }
// )

// // dayOfWeek 
// // 从数据库中通过 起点城市和终点城市 获取 班次信息



</script>


<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    /* 添加这一行来居中文本 */
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px;
    position: sticky;
    top: 0;
    z-index: 100;
    /* 确保标题在其他内容之上 */

}

.query-item {
    display: block;
    border: 2ch;

    border-radius: 0%;
}

.city-container {
    flex-grow: 1;
    /* 允许文本容器填充剩余空间 */
    text-align: center;
}



.query-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 0cqh;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.time-item{
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    border: 0cqh;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.time-item2{
    display: flex;
    flex:1;
    align-items: center;
    justify-content: center;
    border: 0cqh;
    border-radius: 5px;
    padding: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}


.time-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
   
    margin-right: 10px; /* 为竖线留出空间 */
}


.block {
    padding: 10px;

}
</style>