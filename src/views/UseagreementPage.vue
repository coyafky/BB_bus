<template>
    <Goback :route="'/user'"/>
    <div>
        <h1>使用协议</h1>
        <p>这是使用协议的内容</p>
    </div>
</template>

<script setup>
import  Goback from '@/components/goback.vue';
import { ref, provide } from 'vue';

const route = ref('/user');
provide('route', route);
</script>

<style >

</style>