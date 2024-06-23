<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <div v-if="route.schedules && route.schedules.length > 0" v-for="(schedule, index) in route.schedules" :key="index" class="schedule-item">
                <div class="time">
                    <div>
                        {{ schedule.departureTime }}
                    </div>
                    <div>
                        至
                    </div>
                    <div>
                        {{ schedule.arrivalTime || '未知' }}
                    </div>
                </div>

                <div class="route">
                    <div class="start_route">
                        <!-- icon 起 -->
                        <span>
                            起
                        </span>
                        {{ schedule.departurePoints?.join(' > ') || '未知' }}
                    </div>
                    
                    <div class="end_route">
                        <!-- icon 终 -->
                        <span>终</span>
                        {{ schedule.arrivalPoints?.join(' > ') || '未知' }}
                    </div>

                    <div class="remarks">
                        <div class="outer-remark-icon">
                            <div class="inner-remark-icon">
                            <FaBusSimple class="icon"/>
                        </div>
                        </div>
                        <div>
                            {{ schedule.remarks}}
                        </div>
                    </div>
                </div>

                <div class="buy_ticket">
                    <button @click="navigateToStartEndPiontPicker(schedule)">
                        {{ schedule.price }} {{ schedule.ticketType }}
                        <!-- 跳转到选择上下车点页面 -->
                    </button>
                </div>
            </div>
            <div v-else>
                没有可用的班次。
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { FaBusSimple } from '@kalimahapps/vue-icons';
import { useStartEndPointsStore } from '@/stores/startEndPointsStore'; 
const router = useRouter();
defineProps({
    route: {
        type: Object,
        required: true
    }
});
function navigateToStartEndPiontPicker (schedule) {
  {
    const departurePoints = schedule.departurePoints;
    const arrivalPoints = schedule.arrivalPoints;
    const startEndPointsStore = useStartEndPointsStore();
    startEndPointsStore.setPoints(departurePoints, arrivalPoints);
    router.push({
      path: '/StartEndPiontPicker',
    });
  } 
};

// 接受父组件传入的 start end 信息


</script>

<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;
    
}

.schedule-item {
    border-bottom: 1px solid #eee;
 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px gray;
}

.route {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin: 0 auto;
    
    border-radius: 5px;
    word-wrap: break-word;
    word-break: break-all;
}
.start_route, .end_route {
    text-align: left; /* 确保文本左对齐 */
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
   
}
.start_route span{
    margin-right: 5px;
}
.end_route span{
    margin-right: 5px;
}

.remarks{
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
    
}
.outer-remark-icon{
    background-color: white;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid  #4ab1ff; /* 蓝白渐变背景 */
    margin-right: 5px;
    
}

.inner-remark-icon {
    border-radius: 50%;
    background-color: #4ab1ff;
    color:white;
   padding: 1.4px;
}

.icon{
    width: 0.8em;
    height: 0.8em;
}

.time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 5px;
}

.buy_ticket {
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
}

.buy_ticket button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 100%;
    background-color: #24a4ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.start_route span {
   justify-content: center;
    align-items: center;
    color: #c4dea9;
    border: 1px solid #c4dea9;
    border-radius: 50%;
}
.end_route span{
    align-items: center;
    color: #fc8f79;
    border: 1px solid #fc8f79;
    border-radius: 50%;
}


</style>

