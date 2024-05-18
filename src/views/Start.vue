<template>
    <div>
         <header>
            <h1>选择起点</h1>
         </header>

        <div class="current-city">
            当前城市：
            <span>{{ currentCity }}</span>
        </div>

        <ul class="city-list">
            <li v-for="city in cities" :key="city.id">
                <button @click="selectCity(city)">{{ city.name }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useCityStore } from '../stores/cityStore';
import { useRouter } from 'vue-router';
import router from '@/router';

export default {
    setup() {
        const cities = ref([]);
        let currentCity = ref(null);
       let  cityStore = useCityStore();
        const router = useRouter();
        
        // 从store中获取选定的起点城市
     currentCity.value = cityStore. selectedStartCity ;

        const fetchCities = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cities');
                cities.value = response.data;
            } catch (error) {
                console.error(error);
            }
        };

        const selectCity = (city) => {
            // 更新选中的起点城市
            cityStore.setSelectedStartCity(city.name);
            currentCity.value = city.name; // 更新当前城市显示
            router.push('/');
        };

        onMounted(() => {
            fetchCities();
        });

        return {
            cities,
            currentCity,
            selectCity,
        };
    },
};
</script>
<style scoped>

.current-city{
    background-color: blanchedalmond;
    font-size: medium;
    padding: 10px;
    margin-bottom: 20px;
    
}
header {
    background-color: red;
    color: white;
    padding: 10px;
    text-align: left;
}


h1 {
    margin: 0;
}


.city-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* 在每行中均匀分布按钮 */
    padding: 10px; /* 容器内边距 */
    list-style: none; /* 移除默认列表样式 */
}

.city-list li {
    width: calc(33.33% - 20px); /* 每行3个按钮，减去间距 */
    margin-bottom: 20px; /* 按钮之间的垂直间距 */
}

.city-list button {
    width: 100%; /* 按钮宽度填满列表项 */
    height: 50px; /* 按钮高度 */
    background-color: #f0f0f0; /* 按钮背景色 */
    border: none; /* 移除边框 */
    cursor: pointer; /* 鼠标悬停时显示手型 */
}

button:hover {
    background-color: purple;
}

</style>
