<template>
    <div class="user-page">
        <div class="container">
            <div class="photo">
                <!-- 头像组件 -->
                <img :src="userpage" alt="头像" width="100" height="100">
            </div>

            <div class="user-info">
                <div class="integral">
                    <span class="icon7">
                        <el-icon>
                            <Wallet />
                        </el-icon>
                    </span>
                    <span>
                        <router-link to="/">我的积分</router-link>
                    </span>
                    <span class="number">
                        {{ integral }}
                    </span>
                </div>
               

                <div class="voucher">
                    <!-- 我的优惠券页面 -->
                    <span class="icon7">
                        <el-icon >
                            <Tickets />
                        </el-icon>
                    </span>
                    <span>
                        <router-link to="/voucher">我的优惠卷</router-link>
                    </span>
                    <!-- 图标 -->
                    <span class="number">
                        {{ voucher }}
                    </span>
                </div>
            </div>

            <div>

            </div>

            <el-divider />
            <div class="change">
                <!-- 使用路由页面 -->
                <div class="change-item">
                    <!-- 乘车人管理 -->
                    <!-- 图标 -->
                    <span class="icon1">
                        <FlFilledPeopleChat />
                    </span>

                    <span>
                        <router-link to="/passengermanagement">乘车人管理</router-link>
                    </span>

                </div>
                <el-divider />
                <div class="separator"></div>
                <div class="change-item">
                    <!-- 我的次卡 -->
                    <!-- 图标 -->
                    <span class="icon2">
                        <BsBusFrontFill />
                    </span>
                    <span>
                        <router-link to="/secondarycard">我的次卡</router-link>

                    </span>
                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 关于我们 -->
                    <span class="icon3">
                        <TaArticle />
                    </span>
                    <span>
                        <router-link to="/about">关于我们</router-link>
                    </span>

                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 使用协议 -->

                    <span class="icon4">
                        <FlFilledProtocolHandler />
                    </span>
                    <span>
                        <router-link to="/useragreement">使用协议</router-link>
                    </span>

                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 购票须知 -->
                    <span class="icon5">
                        <BsTicketDetailedFill />
                    </span>
                    <span>
                        <router-link to="/TicketImformation">购票须知</router-link>
                    </span>

                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 客服电话 -->
                    <span class="icon6">
                        <CaCustomerService />
                    </span>
                    <span>
                        <router-link to="/">客服电话</router-link>
                    </span>
                    <!-- 在手机上实现调用手机的电话程序  -->

                </div>
                <el-divider />
            </div>
            <Footer class="footer" />
        </div>

    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import Footer from '@/components/Footer.vue';
import userpage from '@/assets/image/userpage.png';
import { FlFilledPeopleChat } from "@kalimahapps/vue-icons";
import { BsBusFrontFill } from "@kalimahapps/vue-icons";
import { TaArticle } from "@kalimahapps/vue-icons";
import { CaIbmWatsonKnowledgeCatalog } from "@kalimahapps/vue-icons";
import { FlFilledProtocolHandler } from "@kalimahapps/vue-icons";
import { CaCustomerService } from "@kalimahapps/vue-icons";
import { BsTicketDetailedFill } from "@kalimahapps/vue-icons";
import { RouterLink } from 'vue-router';
import { Wallet } from '@element-plus/icons-vue';
import { Tickets } from '@element-plus/icons-vue';
const integral = ref(0);
const coupon = ref(0);
const voucher = ref(0);


</script>

<style scoped>
.user-page {
    background-color: #f1f0f5;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;

}

.photo {
    width: 100%;
    height: 100%;

}

.photo img {
    width: 100%;
    height: 100%;
}

.user-info {
    display: flex;
    /* 启用 Flexbox 布局 */
    justify-content: space-between;
    /* 将元素分散在容器中，留出空间给转换按钮 */
    align-items: center;
    /* 垂直居中对齐 */

    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    margin-top: 10px;
    font-size: larger;
    background-color: #ffffff;
    margin-bottom: 10px;
  
}

.integral,
.voucher {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    
}

.integral router-link {
    padding-right: 25px;
    /* 为 router-link 添加右边距 */
}

.voucher router-link {
    padding-right: 25px;
    /* 为 router-link 添加左边距 */
}

.integral span {
    margin-left: 10px;

}

.voucher span {
    margin-left: 10px;
}



.change {

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    
    background-color: #ffffff;
    margin-bottom: 10px;
   
}

.change-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 100%;
    font-size: larger;
}

.change-item span {
    margin-left: 10px;
}

.icon1{
    color:#f08990;
}
.icon2{
    color: #575656;
}
.icon3{
    color: #b9bafa
}
.icon4{
    color: #ff7c78
}
.icon5{
    color: #9ee378;
}
.icon6{
    color:#78aef5
}
.icon7{
    color:#adacac;
}
.number{
    color: red;
}
a {
    text-decoration: none;
    color: inherit;
}
</style>