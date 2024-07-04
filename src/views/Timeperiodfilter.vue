<template>
    <Header :message="'时间选择'">
    </Header>

    <div class="time_select">
        <div class="time_select_item">
            <button @click="navigateToQuerypage('')">
                不限
            </button>
        </div>
        
        <div v-for="(time, index) in timeArray" :key="index" class="time_select_item">
            <button @click="navigateToQuerypage(time.startTime, time.endTime)">
                {{ time.startTime }}-{{ time.endTime }}
            </button>
        </div>
        
        <div class="time_select_item">
            <button @click="navigateToQuerypage('其他时间')">
                其他时间
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router'
const router = useRouter();

const timeArray = [
    {
        startTime: '08:00',
        endTime: '09:00'
    },
    {
        startTime: '09:00',
        endTime: '12:00'
    },
    {
        startTime: '12:00',
        endTime: '15:00'
    },
    {
        startTime: '15:00',
        endTime: '18:00'
    },
    {
        startTime: '18:00',
        endTime: '21:00'
    }
];
function navigateToQuerypage(startTime, endTime) {
    console.log(startTime, endTime);
    router.push({
        path: '/QueryPage',
        query: { startTime, endTime }
    });
}

</script>

<style scoped>
.time_select {
    padding: 50px;
    padding-left:10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
}

.time_select_item {
    color: #b0b0b0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 50px;
    padding: 20px;
    padding-left: 0px;
    margin: 0;
    box-sizing: border-box;
    border-bottom: 1px solid #f0f0f0;
}

.time_select_item button {
    background-color: inherit;
    border: none;
    font-size: 16px;
    color: #333333;
    padding: 0;
    margin: 0;
}
</style>