import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useCityStore = defineStore('city', () => {
  // 使用 ref 定义响应式状态
  const selectedStartCity = ref(null);
  const selectedEndCity = ref(null);

  // 使用 computed 定义 getter
  const startCityName = computed(() => selectedStartCity.value);
  const endCityName = computed(() => selectedEndCity.value);

  // 定义 actions
  function setSelectedStartCity(cityName) {
    selectedStartCity.value = cityName;
  }

  function setSelectedEndCity(cityName) {
    selectedEndCity.value = cityName;
  }

  // 返回状态和操作
  return {
    selectedStartCity,
    selectedEndCity,
    startCityName,
    endCityName,
    setSelectedStartCity,
    setSelectedEndCity,
  };
});