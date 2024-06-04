<template>
    <Header :message="'我的优惠卷'">

    </Header>
    <div class="vochercontainer">


        <div class="vocherlist">
            <el-button v-if="!loading" @click="loadMore">
                加载更多
            </el-button>
            <div v-else class="no-more-data">
                没有更多数据
            </div>
        </div>
    </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, provide } from 'vue';

const loading = ref(false);

const loadMore = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 3000); // 3秒后恢复
};
</script>

<style scoped>
.goback {
    margin-right: auto;
    /* 将返回按钮推到最左侧 */
    padding-left: 0;
}

.title {
    margin: 0 auto;
    /* 将标题居中 */
}

.vochercontainer {
    background-color: #f5f5f5;
    height: 100vh;
}

.el-button {
    margin-top: 20px;
    width: 100%;
    height: 150%;
    background-image: linear-gradient(to left, #f83600 0%, #f9d423 100%);
    border: none;
    border-radius: 10px;
    color: white;
    margin: 10px;
}
.no-more-data {
    margin-top: 20px;
    text-align: center;
    color: gray;
}
</style>