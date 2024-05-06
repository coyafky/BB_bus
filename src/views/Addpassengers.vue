<template>
    <goback :route="'/passengermanagement'"/>
    <div>
        Addpassengers
        222
    </div>
</template>

<script setup>
import goback from '@/components/goback.vue';
import { ref, provide } from 'vue';

const route = ref('/passengermanagement');
provide('route', route);
</script>

<style >

</style>