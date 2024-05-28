<template>
    <div class="header">
        <goback></goback>
        <h1>选择上车点</h1>
    </div>

    <div class="content">
        <div class="all">
            所有站点
        </div>

        <div class="station">
            站点1
        </div>

        <div class="station">
            站点2
        </div>

        <div class="station">
            站点3
        </div>

        <div class="station">
            站点4
        </div>

        <div class="station">
            站点5
        </div>

        <!-- 应该从数据库中获取站点并渲染 -->
        

    </div>
</template>

<script setup>
import { ref,provide } from 'vue';
import goback from '@/components/goback.vue';
const route = ('query');
provide('route',route);

</script>

<style  scoped>

</style>