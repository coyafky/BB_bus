<template>


    <div class="T-header">
        <Goback :route="'/user'">
            返回
        </Goback>

        <div>
            <div>购票须知</div>
        </div>
    </div>
    <div>
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
    </div>
</template>

<script setup>
import Goback from '@/components/goback.vue';
import { ref, provide } from 'vue';

const route = ref('/user');
provide('route', route);
</script>

<style>
.T-header {
    display: flex;
    align-items: center;
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px;
}

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
</style>