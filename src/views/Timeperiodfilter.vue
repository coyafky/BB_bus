
<template>
    <Header :message="'时间选择'">
        
    </Header>

    <div>
        <button>
            <span>不限</span>
        </button>
        <button>
            <span>08:00-09:00</span>
        </button>
        <button>
            <span>
                 09:00-12:00
            </span>
        </button>
            <span>
                12:00-15:00
            </span>
        <button>
            <span>
                15:00-18:00
            </span>
        </button>

        <button>
            <span>
                18:00-21:00
            </span>
        </button>

        <button>
            <span>
                其他
            </span>
        </button>
    </div>
</template>

<script setup>
import { ref ,provide, onMounted} from 'vue';
import Header from '@/components/Header.vue';


</script>

<style  scoped>


</style>