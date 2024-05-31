<template>
    <div>
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


        <div>
            <div class="datebar">
                <div class="lastday">
                    
                        <button>
                            前一天
                        </button>
                  

                </div>
                <el-divider class="datebar_divider" direction="vertical" border-style="dashed" />

                <div class="date">

                   <button @click="">
                    
                   </button>
                    <span> {{ dayOfWeek }}</span>
                </div>
                <el-divider class="datebar_divider" direction="vertical" border-style="dashed" />
                <div class="nextday">
                    
                        <button>
                            后一天
                        </button>
                  
                </div>

            </div>


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
    left: 10px;
}

.card_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
}

.datebar {
    display: flex;
    flex: 5;
    text-align: center;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    margin-top: 10px;
    height: 100%;
    margin-bottom: 10px;
    border-bottom: 1px solid gray
}



.nextday {
    display: flex;
    flex: calc(20%);
    justify-content: center;
    align-items: center;
    border-left: calc(150%) solid rgb(230, 101, 21);

}

.nextday button {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    flex: 1;
    background-color: inherit; /* 继承父元素的背景色 */
  border: none; /* 取消边框 */
}


.lastday {
    display: flex;
    flex: calc(20%);
    
    justify-content: center;
    align-items: center;
   
}

.lastday button {
    width: 100%;
    height: 100%;
    background-color: inherit; /* 继承父元素的背景色 */
  border: none; /* 取消边框 */
}



.date {
    display: flex;
    flex: calc(60%);
    background-color: red
}



.fliter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5px;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid gray;
}



.query-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;

}

.block {
    padding: 10px;

}
</style>