<template>
    <div class="user-page">
        <div class="container">
            <div class="photo">
                <!-- 头像组件 -->
                <img :src="userpage" alt="头像" width="100" height="100">
            </div>

            <div class="user-info">
                <div class="integral">
                    <span>
                        <router-link to="/">我的积分</router-link>
                    </span>
                    <span>
                        {{ integral }}
                    </span>
                </div>
                <div class="divider"></div> <!-- 竖线分隔符 -->
                <div class="voucher">
                    <!-- 我的优惠券页面 -->
                    <span>
                        <router-link to="/voucher">我的优惠卷</router-link>
                    </span>
                    <!-- 图标 -->
                    <span>
                        {{ voucher }}
                    </span>
                </div>
            </div>

            <el-divider />
            <div class="change">
                <!-- 使用路由页面 -->
                <div class="change-item">
                    <!-- 乘车人管理 -->
                    <!-- 图标 -->
                    <span>
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
                    <span>
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
                    <span>
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

                   <span>
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
                    <span>
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
                   <span>
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
const integral = ref(0);
const coupon = ref(0);
const voucher = ref(0);


</script>

<style scoped>

.user-page{
    background-color: #f5f5f5;
}

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: white;

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

  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 10px;
  font-size: larger;
 
}

.integral, .voucher {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  font-size: larger;
}

.integral router-link {
  padding-right: 25px; /* 为 router-link 添加右边距 */
}
.voucher router-link {
  padding-right: 25px; /* 为 router-link 添加左边距 */
}

.integral  span{
    margin-left: 10px;

}
.voucher span{
    margin-left: 10px;
}


.divider {
  width: 1px; /* 竖线的宽度 */
  height: 100%; /* 竖线的高度 */
  background-color: #ccc; /* 竖线的颜色 */
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
    
    
    font-size: larger;
}
.change-item span{
    margin-left: 10px;
}



</style>