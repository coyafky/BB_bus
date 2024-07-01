<template>
    <div>
      <div v-if="hasOrder">
        <OrderCard />
      </div>
      <div v-else-if="emptyState">
      <van-empty
        image="@/assets/image/no_order.png"
        image-size="80"
        description="描述文字"
      />
    </div>
    <div v-else>
      <!-- 默认情况下的内容 -->
      <van-empty
        image="../assets/image/no_order.png"
        image-size="80"
        description="描述文字"
      />
    </div>
    </div>
  </template>
  

<script setup>
import OrderCard from '@/components/OrderCard.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const hasOrder = ref(route.query.hasOrder === 'true');
const emptyState = ref(route.query.emptyState === 'true');
watch(
  () => route.query,
  (newQuery) => {
    hasOrder.value = newQuery.hasOrder === 'true';
    emptyState.value = newQuery.emptyState === 'true';
  }
);


</script>

<style scoped>

</style>