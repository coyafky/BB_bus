<template>
    <div class="container1">
        <div class="order">
            我的订单
        </div>
        <div class="order-status">

            <div class="order-status-item">
                <router-link to="/orderTicket/unfinished" active-class="active">
                    未支付&待出行

                </router-link>
            </div>
            <div class="order-status-item">
                <router-link to="/orderTicket/already" active-class="active">
                    已出行
                </router-link>
            </div>

        </div>


        <div class="another">
            <RouterView>

            </RouterView>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<style scoped>
.container1 {
    display: flex;
    flex-direction: column;
    /* 垂直方向排列子元素 */
    height: 100vh;
    /* 设置父容器高度为整个视口高度 */
}


.order {
    flex: 5%;
    display: flex;
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
    flex: 10%;
}

.order-status {
    display: flex;
    justify-content: space-around;
    background-color: white;
    align-items: center;
    
    flex: 5%
}

.order-status :hover {
   border-bottom: 1px solid red;
}


.order-status-item {
    flex: 1;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: black;
   
    /* 设置底部边框 */
}



.order-status-item{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 100%;
    width: 100%;
}



.another {
    flex: 90%;
    background-color: #f1f0f5;
}

a {
    text-decoration: none;
    color: inherit;
}

.active {
    color: red;

}
</style>