<template>

  <Head :message=parenthead>

  </Head>
  <div class="container">


    <div class="current-city">
      <h3>
        当前城市：
      </h3>
      <div class="c_city">
        <span>{{ currentCity }}</span>
      </div>
    </div>
    <div class="already">

    <h3>
      已经开通的城市
    </h3>

    <ul class="city-list">
      <li v-for="city in cities" :key="city.id">
        <button @click="selectCity(city)">{{ city.name }}</button>
      </li>
    </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCityStore } from '../stores/cityStore';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Head from '@/components/Header.vue';

const currentCity = computed(() => cityStore.selectedStartCity);
const parenthead = ref('选择起点城市');

const cities = ref([]);
const cityStore = useCityStore();
const selectedStartCity = computed(() => cityStore.selectedStartCity);
const router = useRouter();

const fetchCities = async () => {
  try {
    const response = await axios.get('http://localhost:3000/cities');
    cities.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

const selectCity = (city) => {
  // 检查是否与终点城市相同
  if (city.name === cityStore.selectedEndCity) {
    alert('起点城市不能与终点城市相同，请重新选择！');
    return;
  }
  // 更新选中的终点城市
  cityStore.setSelectedStartCity(city.name);
  router.push('/');
};

const navigateToHome = () => {
  router.push('/');
};

onMounted(() => {
  fetchCities();
});
</script>
<style scoped>
.container{
  background-color: #f1f0f5;
  padding-left: 10px;
}


.city-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; /* 在每行中均匀分布按钮 */
 /* 容器内边距 */
    list-style: none; /* 移除默认列表样式 */
}

.city-list li {
    width: calc(33.33% - 20px); /* 每行3个按钮，减去间距 */
    margin-bottom: 15px; /* 按钮之间的垂直间距 */
}

.city-list button {
    width: 100%; /* 按钮宽度填满列表项 */
    height: 50px; /* 按钮高度 */
    background-color:white;/* 按钮背景色 */
    border: none; /* 移除边框 */
    cursor: pointer; /* 鼠标悬停时显示手型 */
}

button:hover {
    background-color: purple;
}

.current-city {
  background-color: inherit; /* 浅蓝色背景 */
  color: #333; /* 深灰色文本 */
  font-size: 1em; /* 更大的字体大小 */
   /* 增加内边距 */
  margin-bottom: 20px;
  border-radius: 8px; /* 添加一些圆角以增加卡片感 */
  
}


.current-city span {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  height: 50px;
  background-color: white;
  border: none;
  cursor: default; /* 如果不需要点击，可以设置为默认光标 */
  border-radius: 4px;
  transition: background-color 0.3s ease;
  padding: 10px; /* 根据需要调整内边距 */
  box-sizing: border-box; /* 包含内边距在宽度内 */
  text-align: center; /* 根据需要调整文本对齐 */
  font-size: 18px;
}

h3{
  color: #878787;
}

</style>
