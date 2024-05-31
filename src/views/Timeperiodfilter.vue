<template>
    <Header :message="'时间选择'">

    </Header>

    <div class="time_select">
        <div class="time_select_item">
            <button>
                不限
            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                08:00-09:00
            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                09:00-12:00
            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                12:00-15:00
            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                15:00-18:00

            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                18:00-21:00
            </button>
        </div>
        
        <div class="time_select_item">
            <button>
                其他时间
            </button>
        </div>
        
    </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue';
import Header from '@/components/Header.vue';


</script>

<style scoped>

.time_select{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    
    box-sizing: border-box;
   
}

.time_select_item{
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: 100%;
    height: 100%px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
}

.time_select_item button{
    background-color: inherit;
    border: none;
    font-size: 20px;
    color: #333;
    padding: 0;
    margin: 0
}


</style>