<template>
    <div class="user-page">
        
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
                    <button @click="navigateToVoucher">
                        <span class="icon7">
                            <el-icon>
                                <Tickets />
                            </el-icon>
                        </span>
                        <span>
                            我的优惠卷
                        </span>
                        <!-- 图标 -->
                        <span class="number">
                            {{ voucher }}
                        </span>
                    </button>
                </div>
            </div>





            <div class="change">
                <!-- 使用路由页面 -->
                <button class="change-item" @click="navigateToPassengermanagement">
                   
                    <!-- 乘车人管理 -->
                    <!-- 图标 -->
                    <span class="icon1">
                        <FlFilledPeopleChat />
                    </span>

                    <span>
                        乘车人管理
                    </span>

                
                </button>

                <div class="separator"></div>
                <button class="change-item" @click="navigateToSecondarycard">
                    <!-- 我的次卡 -->
                    <!-- 图标 -->
                    <span class="icon2">
                        <BsBusFrontFill />
                    </span>
                    <span>
                        我的次卡

                    </span>
                </button>

                <div class="separator"></div>

                <button class="change-item" @click="navigateToAbout">
                    <!-- 关于我们 -->
                    <span class="icon3">
                        <TaArticle />
                    </span>
                    <span>
                       关于我们
                    </span>

                </button>

                <div class="separator"></div>

                <button class="change-item" @click="navigateToUseragreement">
                    <!-- 使用协议 -->

                    <span class="icon4">
                        <FlFilledProtocolHandler />
                    </span>
                    <span>
                        使用协议
                    </span>
                </button>

                <div class="separator"></div>

                <button class="change-item" @click="navigateToTicketImformation">
                    <!-- 购票须知 -->
                    <span class="icon5">
                        <BsTicketDetailedFill />
                    </span>
                    <span>
                        购票须知
                    </span>

              </button >

              

              <button class="change-item" @click="navigateToHome">
                    <!-- 客服电话 -->
                    <span class="icon6">
                        <CaCustomerService />
                    </span>
                    <span>
                    客服电话:112223333
                    </span>
                    <!-- 在手机上实现调用手机的电话程序  -->

               </button>

            </div>

       
        <Footer class="footer" />
    </div>
</template>

<script setup>
import { ref, provide } from 'vue';
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
import { useRouter } from 'vue-router';

const integral = ref(0);
const coupon = ref(0);
const voucher = ref(0);

const router = useRouter();

function navigateToVoucher() {
    router.push('/voucher');
}

function navigateToPassengermanagement() {
    router.push('/passengermanagement');
}

function navigateToSecondarycard() {
    router.push('/secondarycard');
}

function navigateToAbout() {
    router.push('/about');
}

function navigateToUseragreement() {
    router.push('/useragreement');
}

function navigateToTicketImformation() {
    router.push('/TicketInformation');
}

function navigateToHome() {
    router.push('/');
}

</script>

<style scoped>
.user-page {
    display: flex;
    width: auto;
    height: 100vh;
    flex-direction: column;
    background-color: #f1f0f5
}



.photo {
    width: 100%;
    height: auto;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;
    background-color: white;
}


.integral {
    width: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px;
}
.integral span{
    padding-right: 5px;
    font-size: 16px;
}

.voucher{
    width: 50%;
    height:100%;
    padding: 10px;
}

.voucher button {
    border: none;
    background-color: inherit;
    width: 100%;
    height: 100%;
}
.voucher button :nth-child(){
    padding-right:5px;
}

.change{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-top: 10px;
    background-color: white;
}
.change-item{
    border: none;
    background-color: inherit;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 16px;
    border-bottom: 1px solid #ededed;


}

.change-item span{
    padding-right: 10px;
   
}
.change-item :nth-child(1){
    font-size: 25px;
}

.icon1 {
    color: #f08990;
    font-size: large;
}

.icon2 {
    color: #575656;
}

.icon3 {
    color: #b9bafa
}

.icon4 {
    color: #ff7c78
}

.icon5 {
    color: #9ee378;
}

.icon6 {
    color: #78aef5
}

.icon7 {
    color: #adacac;
    font-size: 20px;
    text-align:center;
}

.number {
    color: red;
}

a {
    text-decoration: none;
    color: inherit;
}
</style>