<template>
    <div>
        <div class="container">
            <div class="photo">
                <!-- 头像组件 -->
                <img :src="userpage" alt="头像" width="100" height="100">
            </div>

            <div class="user-info">
                <div class="integral">
                    <router-link to="/">我的积分</router-link>
                    {{ integral }}
                </div>

                <div class="voucher">
                    <!-- 我的优惠券页面 -->
                    <router-link to="/voucher">我的优惠卷</router-link>
                    <!-- 图标 -->
                    {{ voucher }}
                </div>
            </div>


            <div class="change">
                <!-- 使用路由页面 -->
                <div class="change-item">
                    <!-- 乘车人管理 -->
                    <!-- 图标 -->
                    <FlFilledPeopleChat />
                    <router-link to="/passengermanagement">乘车人管理</router-link>
                    
                </div>
                <el-divider />
                <div class="separator"></div>
                <div class="change-item">
                    <!-- 我的次卡 -->
                    <!-- 图标 -->
                    <BsBusFrontFill />
                    <router-link to="/secondarycard">我的次卡</router-link>
                 
                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 关于我们 -->
                    <TaArticle />
                    <router-link to="/about">关于我们</router-link>
                    
                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 使用协议 -->

                    <FlFilledProtocolHandler />
                    <router-link to="/useragreement">使用协议</router-link>
                  
                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 购票须知 -->
                    <BsTicketDetailedFill />
                    <router-link to="/TicketImformation">购票须知</router-link>
                   
                </div>
                <el-divider />
                <div class="separator"></div>

                <div class="change-item">
                    <!-- 客服电话 -->
                    <CaCustomerService />
                    <router-link to="/">客服电话</router-link>
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
const integral = ref(0);
const coupon = ref(0);
const voucher = ref(0);


</script>

<style scoped>

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;

}
.photo{
    width: 100%;
    height: 100%;
    
}
.photo img{
    width: 100%;
    height: 100%;
}
.user-info {
  display: flex; /* 启用 Flexbox 布局 */
  justify-content: space-between; /* 将元素分散在容器中，留出空间给转换按钮 */
  align-items: center; /* 垂直居中对齐 */
  background-color: blanchedalmond;
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
  text-align: center;
}

.integral{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 50%;
    height: 100%;
    background-color: aqua;
    font-size: 20px;
}   
.voucher{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 50%;
    height: 100%;
    background-color:aliceblue;
    font-size: 20px;
}

.change{

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
   
    font-size: 20px;
}

.change-item{
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    font-size: 20px;
    font-size: larger;
}



</style>