<template>


    <Head :message=headername>

    </Head>
    <div class="container">
        <div class="p-header">
            一、发车时间及到达时间
        </div>
        <div class="content">
            <p>
                1、发车时间：根据实际出发时间，提前15分钟
            </p>
            <p>
                2、到达时间：根据实际出发时间，提前15分钟
            </p>
            <p>
                3、如遇天气、交通、节假日等因素影响，发车时间
                和到达时间可能会有所调整
            </p>
        </div>
        <div class="p-header">
            二、儿童票
        </div>
        <div class="content">
            <p>
                1、0-14岁的婴儿或儿童不能单独乘车，需要至少
                一位成人陪同
            </p>
            <p>
                2、身高在1.2米以下的婴儿或儿童请购买儿童票，
                有座位；身高12米（含）以上的请购买成人票
            </p>
        </div>
        <div class="p-header">
            三、退票及改签
        </div>
        <div class="content">
            <p>
                1、在发车前30分钟以上，可自行取消订单或改
                签，部分线路退票或改签会产生手续费，详情参考
                “手续费收取规则
            </p>
            <p>
                2、在发车前30分钟以内，或者过了发车时间，迟
                到及未乘车，车票视为过期，不可退票或改签
            </p>
            <p>
                3、旅游线路（双月湾、巽寮湾、清远漂流等）的
                退改，规则详见订票页面，预订成功后，车票不退
                不改。
            </p>
            <p>
                4、退还的款项将在3个工作日内返还至原支付账户
            </p>
            <p>
                5、特价票预订成功，不做退票处理，如需改签，
                需补差价
            </p>
        </div>
        <div class="p-header">
            四、手续费收取规则
        </div>
        <div class="content">
            <p>
                1、距发车时间5小时前退票或改签，不收取手续费
            </p>
            <p>
                2、距发车时间2小时~5小时（不含）退票或改签，收
                取手续费10%
            </p>
            <p>
                3、距发车时间1小时~2小时（不含）退票或改签，收
                取手续费20%
            </p>
            <p>
                4、距发车时间30分钟~60分钟（不含）退票或改
                签，收取手续费50%
            </p>
            <p>
                5、改签过的车票，再次退票或改签收取手续费50%
            </p>
        </div>

        <div class="p-header">
            五验票及上车
        </div>
        <div class="content">
            <p>
                1、购票成功后，凭订单页面电子车票验票上车，
                订单详情可查询领队电话
            </p>

        </div>


        <div class="p-header">
            五、优惠价的使用方法
        </div>
        <div class="content">
            <p>
                优惠券的有效期是3个月，在线购买支付正价票的
                时候才可使用，已使用支付的优惠券，退票或改签
                时不再返还
            </p>

        </div>



        <div class="p-header">
            七，其他注意事项
        </div>
        <div class="content">
            <p>
                1、贵重物品、行李及相关重要证件、资料，请乘
                客自行妥善保管，如有丢失，最高赔额100元
            </p>
            <p>
                2、车厢为封闭性空调公共场所，严禁携带宠物、
                活物上车，严禁携带含有酒精或其他危险物品上
                车，严禁携带电器、自行车、婴儿车等大物件物品
                上车
            </p>
            <p>
                3、应交通部规定，02：00-05：00所有营运巴士必须
                停止行驶，行驶中的巴士必须停靠服务区休息
            </p>

        </div>
    </div>
</template>

<script setup>
import Goback from '@/components/goback.vue';
import { ref, provide } from 'vue';
import Head from '@/components/Header.vue';

const headername = ref('购票须知');

const route = ref('/user');
provide('route', route);
</script>

<style>
.p-header {
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
    color: red;
}

.content {
    margin: 10px;
    font-size: 16px;


}

.container {
    height: calc(100vh - 60px);
    /* 假设header高度为60px，100vh为视口高度 */
    overflow-y: auto;
}
</style>