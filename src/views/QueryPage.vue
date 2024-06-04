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
                    <IcSolidRhombusArrowRight />
                </span>
                <span>
                    {{ endCity }}
                </span>
            </div>
        </div>


        <div class="date_container">
    
                <button>
                    前一天
                </button>
            

            <div class="showdate">
                <el-icon><Calendar /></el-icon>
                <span>
                 {{ formattedDate }}
                </span>
                <span>
                    {{ dayOfWeek }}
                </span>
            </div>
                <button>
                    后一天
                </button>
            
        </div>
        <div class="fliter">
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
                <RouterLink to="/StartPiontPicker">
                    <IcSolidRhombusArrowRight />
                    上车点筛选

                </RouterLink>
            </div>
            <div class="query-item">
                <MdRoundPinDrop />
                <!--  -->
                <RouterLink to="/EndPiontPicker">
                    下车点筛选
                </RouterLink>

            </div>
        </div>



        <div class="card_container">
            <Card>

            </Card>
            <!-- 根据获取的城市，得到的结果 决定多少个card被渲染 -->
            <Card>

            </Card>
            <Card>

            </Card>
            <Card>

            </Card>
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
import { Calendar} from '@element-plus/icons-vue';
const cityStore = useCityStore();

// 从Pinia中获取城市信息
const startCity = computed(() => cityStore.selectedStartCity);
const endCity = computed(() => cityStore.selectedEndCity);


const value1 = ref(new Date());
const currentTime = ref(new Date());
const route = ref('/');
provide('route', route);


const date = new Date(value1.value);

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

// 是用start end信息和数据库的进行比对 json——server



// 获取数据库中的班次信


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
.container{
    background-color: #f1f0f5;
}
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

.goback {
    position: absolute;
    left: 0px;
}

.card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap:10px;
}
.date_container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: #ffffff;

}


 button{
    width: 15%;
    height: 100%;
    
    border: none;
    background-color: inherit
}

.showdate{
    width: 70%;
    height: 100%;
    border-left: 1px solid red;
    border-right: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
}



.fliter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid gray;
    background-color: #ffffff;
}



.query-item {
    display: flex;
    justify-content: center;
    align-items: center;
    

}

.block {
    padding: 10px;

}


a {
    text-decoration: none;
    color: inherit;
}

a:hover{
    color: #e87a74;
}

</style>