<template>
    <div class="container1">
        <div class="order">
            我的订单
        </div>
        <div class="order-status">
            <div>
                <router-link to="/orderTicket/unfinished">
                    未完成&待出行
                
                </router-link >
            </div>
            <div>
                <router-link to="/orderTicket/already">
                    已出行
                </router-link>
             
            </div>
      

        </div>

        <div class="another">
            <RouterView>
            
        </RouterView>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<style>
.container1 {
    display: flex;
    flex-direction: column;
    /* 垂直方向排列子元素 */
    height: 100vh;
    /* 设置父容器高度为整个视口高度 */
}


.order {
    flex: 0.4;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: red;
    color: white;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */

}

.footer2 {
    flex: 0.5;
}

.order-status {
    display: flex;
    justify-content: space-around;
    background-color: aliceblue;
    text-align: center;

}

.order-status div {
    width: 200px;
    height: 50px;
    text-decoration: none;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    font-size: 20px;

}

.order-status div:hover {
    color: red;
    text-decoration: underline;
}


.another {
    flex: 7;
}
</style>