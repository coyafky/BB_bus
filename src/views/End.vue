<!-- End.vue -->
<template>
  <div class="header">
    <h1>选择终点</h1>
  </div>

    <div class="currentEnd_city">
      <span>
        已选择终点城市：{{ selectedEndCity }}
      </span>
    </div>

  <div>
    <ul class="city_list">
      <li v-for="city in cities" :key="city.id">
        <button @click="selectCity(city)">{{ city.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useCityStore } from '../stores/cityStore';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const router = useRouter();
    const cities = ref([]);
    const cityStore = useCityStore();
    const selectedEndCity = computed(() => cityStore.selectedEndCity);
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cities');
        cities.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    const selectCity = (city) => {
      // 检查是否与起点城市相同
      if (city.name === cityStore.selectedStartCity) {
        alert('终点城市不能与起点城市相同，请重新选择！');
        return;
      }
      // 更新选中的终点城市
      cityStore.setSelectedEndCity(city.name);
      router.push('/');
    };


    onMounted(() => {
      fetchCities();
    });

    return {
      cities,
      selectCity,
      selectedEndCity,

    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}


.city-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* 在每行中均匀分布按钮 */
  padding: 10px;
  /* 容器内边距 */
  list-style: none;
  /* 移除默认列表样式 */
}

.city-list li {
  width: calc(33.33% - 20px);
  /* 每行3个按钮，减去间距 */
  margin-bottom: 20px;
  /* 按钮之间的垂直间距 */
}

.city-list button {
  width: 100%;
  /* 按钮宽度填满列表项 */
  height: 50px;
  /* 按钮高度 */
  background-color: #f0f0f0;
  /* 按钮背景色 */
  border: none;
  /* 移除边框 */
  cursor: pointer;
  /* 鼠标悬停时显示手型 */
}

.city-list button:hover {
  background-color: #34b648;
  /* 鼠标悬停时的背景色 */
}
</style>