<template>
    <div>
        <div class="container">
            <div class="photo">
                    <!-- 头像组件 -->
                    <img :src="userpage" alt="头像" width="100" height="100">
            </div>

            <div class="user-info">
                
                <div class="">
                    <!-- 我的积分页面 -->
                    <!-- 图标 -->

                    <router-link to="/">我的积分</router-link>
                    {{ integral }}
                </div>

                <div class="">
                    <!-- 我的优惠券页面 -->
                    <router-link to="/">我的优惠卷</router-link>
                    <!-- 图标 -->
                   
                    {{ voucher }}
                    
                </div>
            </div>
            <div class="change">
                <!-- 使用路由页面 -->
                <div>
                    <!-- 乘车人管理 -->
                    <!-- 图标 -->
                    <FlFilledPeopleChat/>
                    <router-link to="/passengermanagement">乘车人管理</router-link>
                </div>
                <div>
                    <!-- 我的次卡 -->
                    <!-- 图标 -->
                    <BsBusFrontFill/>
                    <router-link to="/secondarycard">我的次卡</router-link>
                    
                </div>
              

                <div>
                    <!-- 关于我们 -->
                    <TaArticle/>
                    <router-link to="/about">关于我们</router-link>
                </div>

                <div>
                    <!-- 使用协议 -->
                    
                    <FlFilledProtocolHandler />
                    <router-link to="/useragreement">使用协议</router-link>
                </div>

                <div>
                    <!-- 购票须知 -->
                    <BsTicketDetailedFill/>
                    <router-link to="/TicketImformation">购票须知</router-link>
                    
                </div>

                <div>
                    <!-- 客服电话 -->
                    <CaCustomerService/>
                    <router-link to="/">客服电话</router-link>
                      <!-- 在手机上实现调用手机的电话程序  -->
                </div>
                
            </div>
            <Footer class="footer"/>
        </div>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
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

<style >
.container {
  display: flex;
  flex-direction: column; /* 垂直方向排列子元素 */
  height: 100vh; /* 设置父容器高度为整个视口高度 */
}
.user-info {
  flex: 1; /* UserInfo组件占据剩余空间 */
  display: flex;
  justify-content: space-around; /* 子元素水平居中 */
  align-items: center; /* 子元素垂直居中 */
  background-color: #f2f2f2; /* 背景颜色 */
}

.user-info > div{

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100px;
}



.change {
    flex:6 ;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: row;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.change > div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100px;
    margin: 10px;
}

.photo {
  flex: 2; /* Photo组件占据剩余空间 */
  position: relative; /* 相对定位，用于绝对定位子元素 */
}

.footer{
    flex: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #dce6b6;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding: 0 10px;
}



</style>