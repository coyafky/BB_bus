<template>
    <div class="vochercontainer">
        <div class="header">
            <Goback>
                返回
            </Goback>
            <div>
                我的优惠卷
            </div>
        </div>

        <div class="vocherlist">
            <el-button>
                添加优惠卷
            </el-button>
        </div>
    </div>
</template>


<script setup>
import Goback from '@/components/goback.vue';
import { ref, provide } from 'vue';

const route = ref('/user');
provide('route', route);
</script>


<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: red;
    border-bottom: 1px solid #f0f0f0;
}

.vochercontainer {
    background-color: #f5f5f5;
    height: 100vh;
}


.vocherlist{
    
    width: 100%;
    height: 100%;
    background-color: blue;
}

.el-button {
    margin-top: 50%;
    max-width: 100%;
    width: 100%;
    
    background-color: red;
    color: white;
    border: none;
}

</style>