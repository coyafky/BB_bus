<template>

    <header>
        <Goback :route="'/user'"/>
        <div>
            乘车人管理
        </div>
        <button>
            <router-link to="/addpassnegers">
                <CaAddLarge/>
            </router-link>
        </button>
    </header>
    
</template>

<script setup>

import  Goback from '@/components/goback.vue';
import { CaAddLarge } from "@kalimahapps/vue-icons";
import { ref, provide } from 'vue';

const route = ref('/user');
provide('route', route);

</script>

<style >
header{
    background-color: red;
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    color: white;
    font-size: 18px;
    font-weight: 700;
}

header button{
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 10px;
    
}


</style>