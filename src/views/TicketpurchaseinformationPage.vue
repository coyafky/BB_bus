<template>
    <Goback :route="'/user'"/>
    <div>
            TicketpurchaseinformationPage
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