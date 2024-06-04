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

    <main>
        <div>
            <!-- 服务器传入的数据 -->
        </div>
        <div class="rule">
            根据新规，乘车人必须实名乘车
            <br>
            信息录入交通部数据库，保护乘客个人信息安全
        </div>
    </main>
    
</template>

<script setup>

import  Goback from '@/components/goback.vue';
import { CaAddLarge } from "@kalimahapps/vue-icons";
import { ref, provide } from 'vue';

const route = ref('/user');
provide('route', route);

</script>

<style scoped >
header{
    background-color: red;
    display: flex;
    flex: auto;
    justify-content: space-between;
    align-items: center;
    
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

.rule{
    font-size: 16x;
    color: red;
    padding: 0 10px;
    text-align: center;

}


</style>