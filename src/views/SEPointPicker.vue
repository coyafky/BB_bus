<template>
    <Header :message="'选择上下车点'"></Header>
    <div class="maincontainer">
        <div class="content">
            <div class="header">
                <span class="icon">🚍</span>
                <span>选择上下车站点</span>
                <span class="time">时刻</span>
            </div>
            <!-- 用组件和数据渲染 -->
        </div>

        <div class="stations-list">
            <div v-for="(station, index) in stations" :key="index" class="station-item">
                <span class="icon">🛤️</span>
                <span class="station-info">{{ station.name }}</span>
                <span class="time">{{ station.time }}</span>
            </div>
        </div>

        <div class="dropoff-list">
            <div v-for="(station, index) in dropoffStations" :key="index" class="dropoff-item">
                <span class="icon">⬇️</span>
                <span class="station-info">{{ station.name }}</span>
            </div>
        </div>
        <button @click="goToPayment">下一步</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Header from '@/components/Header.vue';

const router = useRouter();

const stations = ref([
    { name: '禾花地铁A出口(平湖平南学校旁)', time: '21:00' },
    { name: '坑梓地铁C出口（公交车站）', time: '21:10' },
    { name: '坪山国惠康坪山国公交通（往爱联方向）', time: '21:30' },
    { name: '观澜(茜坑地铁站南公交通D口出)', time: '21:30' },
    { name: '民治地铁A出口', time: '21:40' },
    { name: '大浪商业中心公交通(友谊书城旗杆旁)', time: '21:45' },
    { name: '龙岗木棉湾地铁站C口', time: '21:50' },
    { name: '龙胜地铁站C出口', time: '21:50' },
    { name: '龙岗昌盛百货侧门如意轩茶餐厅门口（爱联地铁站D出口右转）', time: '22:00' },
    { name: '宝燃油站公交通站站对面(近石岩官田地铁)', time: '22:00' }
]);

const dropoffStations = ref([
    { name: '高桥德耀路口' },
    { name: '横山供电所' },
    { name: '青平供电所路口' },
    { name: '红江农场路口' },
    { name: '石主坡路口' },
    { name: '安铺高速路口' },
    { name: '营仔路口' }
]);

const goToPayment = () => {
    router.push('/paymentPage');
};
</script>

<style scoped>
.maincontainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;
    padding: 16px;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 8px;
}

.stations-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
}

.station-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
}

.icon {
    margin-right: 8px;
    color: #f08990;
    /* 设置图标颜色 */
}

.station-info {
    flex-grow: 1;
    text-align: left;
    /* 确保文本左对齐 */
}

.time {
    margin-left: 8px;
    color: red;
    position: absolute;
    right: 10px;
}

.dropoff-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 16px;
}

.dropoff-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
}

.dropoff-item .icon {
    margin-right: 8px;
    color: #f08990;
    /* 设置图标颜色 */
}

.dropoff-item .station-info {
    flex-grow: 1;
    text-align: left;
    /* 确保文本左对齐 */
}

button {
    width: 100%;
    height: 40px;
    background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
    border: none;
    border-radius: 10px;
    color: white;
    position: relative;
    left: -13px;
    bottom: -20px;
}
</style>