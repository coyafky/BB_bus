<template>
    <Header :message="'选择下车点'">

    </Header>

    <div class="content">
        
        <button>
            所有
        </button>
    </div>

    <div class="point">
        <div>
            <button>
                所有站点
            </button>

        </div>
        <!-- 从数据库中获取站点位置 -->
        <!-- 并且每一行 只有2个 站点位置 -->
    </div>


</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue';

</script>

<style  scoped>

</style>