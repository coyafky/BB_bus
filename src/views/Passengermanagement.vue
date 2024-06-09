<template>
    <div class="container">

    <header>
        <Goback :route="'/user'"/>
        <div>
            乘车人管理
        </div>
        <button @click="addPassenger" class="add-passenger">
           
            <van-icon name="plus" />
          
        </button>
    </header>

    <main>
        
       
        <div class="rule">
            根据新规，乘车人必须实名乘车
            <br>
            信息录入交通部数据库，保护乘客个人信息安全
        </div>
        <div>
            <passengercrad/>
        </div>
    </main>
    
    </div>
</template>

<script setup>

import  Goback from '@/components/goback.vue';
import { CaAddLarge } from "@kalimahapps/vue-icons";
import { ref, provide } from 'vue';
import { useRouter } from 'vue-router';
import  passengercrad from '@/components/Passengercard.vue'


const router = useRouter();
const route = ref('/user');
provide('route', route);

function addPassenger() {
    router.push('/addpassnegers');
}
</script>

<style scoped >
.container{
    background-color:#f1f0f5 ;
}
header{
    background-color: red;
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    
    color: white;
    font-size: 18px;
    font-weight: 700;
    padding: 10px
}

.add-passenger{
    background-color: red;
    color: white;
    font-size: large;
    border: none;
   
    border-radius: 10px;
    font-weight: bold;
}

.rule{
    font-size: 16x;
    color: red;
    padding: 10px;
    text-align: center;

}


</style>