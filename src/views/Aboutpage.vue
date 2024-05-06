// 父组件
<template>
    <goback />
    
</template>

<script setup>
import goback from "../components/goback.vue";
import { GlGoBack } from "@kalimahapps/vue-icons";
import { useRouter } from 'vue-router';
import { ref, provide } from 'vue';


const route = ref('/user');
provide('route', route);
</script>
