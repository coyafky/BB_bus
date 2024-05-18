<template>
    <div>
        <!-- 查询页 -->

        <!-- 返回组件 -->

        <!-- 起点名字，终点城市渲染的名字 -->
        <div>

            <div>

                <!-- button ，使得value1 -->
                <button @click="updateTime('previous')">
                    前一天

                </button>
            </div>

            <div>
                <div class="block">
                    <span class="demonstration">Default</span>
                    <el-date-picker v-model="value1" type="datetime" placeholder="Select date and time" />
                </div>
                <div>
                    <span> {{ dayOfWeek }}</span>
                </div>
            </div>

            <button @click="updateTime('next')">
                后一天
            </button>
        </div>

        <div>
            <div>
                所有班次
            </div>
            <div>
                时间段筛选
            </div>
            <div>
                上车点筛选
            </div>
            <div>
                下车点筛选
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const value1 = ref(new Date());
const currentTime = ref(new Date());


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
</script>


<style></style>