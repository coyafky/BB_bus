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

                    我的积分
                    {{ integral }}
                </div>

                <div class="">
                    <!-- 我的优惠券页面 -->
                    我的优惠券
                    <!-- 图标 -->
                   
                    {{ voucher }}
                    
                </div>
            </div>
            <div class="change">
                <!-- 使用路由页面 -->
                <div>
                    <!-- 乘车人管理 -->
                    乘车人管理 
                </div>
                <div>
                    <!-- 我的次卡 -->
                    我的次卡
                </div>
                <div>
                    <!-- 修改密码 -->
                    修改密码
                </div>

                <div>
                    <!-- 关于我们 -->
                    关于我们
                </div>

                <div>
                    <!-- 使用协议 -->
                    使用协议
                </div>

                <div>
                    <!-- 购票须知 -->
                    购票须知
                </div>

                <div>
                    <!-- 客服电话 -->
                    客服电话   122333444
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


.change{
    flex:6
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