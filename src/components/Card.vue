<template>
    <div class="card">
        
        <div class="All_schedule-item" v-for="(schedule, index) in routeStore.Allschedules" :key="index">
            <!-- 其他内容 -->
            <div class="card-body">
            <div class="schedule-item">
                <div class="time">
                    <div class="time_notice">
                       <!-- 起始最早时间 -->
                        {{schedule.departureStartTime}}
                    </div>
                    <div>
                        至
                    </div>
                    <div class="time_notice">
                        <!-- 终止最晚时间 -->
                         {{ schedule.depatureEndTime}}
                    </div>
                </div>

                <div class="route">
                    <div class="start_route">
                        <!-- icon 起 -->
                        <span>
                            起
                        </span>
                        <!-- 起点 -->
                        {{ departurePointNames(schedule.departurePoints).join(' > ') }}
                        
                    </div>
                    
                    <div class="end_route">
                        <!-- icon 终 -->
                        <span>终</span>
                       <!-- 终点 -->
                       {{ schedule.arrivalPoints?.join(' > ') }}
                    </div>

                    <div class="remarks">
                        <div class="outer-remark-icon">
                            <div class="inner-remark-icon">
                            <FaBusSimple class="icon"/>
                        </div>
                        </div>
                        <div>
                           <!-- 备注 -->
                            {{ schedule.remarks }}
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
           
        </div>
        </div>

    </div>
</template>

<script setup>
import { ref ,computed} from 'vue'
import { useRouter } from 'vue-router'
import { FaBusSimple } from '@kalimahapps/vue-icons';
import { useStartEndPointsStore } from '@/stores/startEndPointsStore';
import { useRouteStore } from '@/stores/routeStore';
import { useChooseRouteStore } from '@/stores/chooseRouteStore';

const router = useRouter();
const startEndPointsStore = useStartEndPointsStore();
const routeStore = useRouteStore();
const chooseRouteStore = useChooseRouteStore();
// console.log(routeStore.schedules.schedules);
// for (let i = 0; i < routeStore.schedules.schedules.length; i++) {
//     console.log(routeStore.schedules.schedules[i]);
//     // 处理每个对象的属性
//     // 在pinia中存储schedules每个对象
// }

function departurePointNames (point){
    return point.map(point=>point.name)
}

function navigateToStartEndPiontPicker(schedule){
    console.log(schedule);
    // 跳转到选择上下车点页面
    // 在pinia中存储schedules startpoint 和 endpoint
    startEndPointsStore. setPoints(schedule.departurePoints, schedule.arrivalPoints);
    console.log(startEndPointsStore.departurePoints, startEndPointsStore.arrivalPoints);
    // router.push('/start-end-point-picker');
    chooseRouteStore. setPrice(schedule.price);
    router.push('/StartEndPiontPicker');
}

</script>

<style scoped>
.card-body {
    display: flex;
    flex-direction: column;
    margin: 8px auto;
    padding-top: 10px;
    padding-bottom: 10px;
   

}
.All_schedule-item{
    display: flex;
    flex-direction: column;
    margin: 5px auto;
    background-color: #ffffff;
}

.schedule-item {
   
    display: flex;
    flex-direction: row;
    
    
}

.time_notice{
    font-size: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
  
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

.start_route,
.end_route {
    text-align: left;
    /* 确保文本左对齐 */
    border-radius: 5px;
    margin-bottom: 8px;
    margin-top: 8px;

}

.start_route span {
    margin-right: 5px;
}

.end_route span {
    margin-right: 5px;
}

.remarks {
    
    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;

}

.outer-remark-icon {
    background-color: white;
    padding: 2px;
    border-radius: 50%;
    border: 1px solid #4ab1ff;
    /* 蓝白渐变背景 */
    margin-right: 5px;

}

.inner-remark-icon {
    border-radius: 50%;
    background-color: #4ab1ff;
    color: white;
    padding: 1.4px;
}

.icon {
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

.end_route span {
    align-items: center;
    color: #fc8f79;
    border: 1px solid #fc8f79;
    border-radius: 50%;
}
</style>
