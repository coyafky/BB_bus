<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot></slot>
            <div>
                time
                从数据库中获取Time


            </div>

            <div>
                上车点下车点路线

                从数据库中获取路线
            </div>

            <div>
                <button @click="router.push('/select-points'
                    
                )">
                根据数据库中的路线来获取票价价格
                    <!-- 跳转到选择上下车点页面 -->
                    
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
    cardData: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>

</style>
