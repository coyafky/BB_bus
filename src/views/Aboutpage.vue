// 父组件
<template>
    <Head :message="parentHead">

    </Head>
    <div class="content">
        AA巴士，成立于2015年2月28日，是一家汽车票线上
        预定平台。我们不经营线路，我们的工作是为乘客和运
        输企业搭建一个交流平台，让乘客可以找到最便宜的，
        最方便的车乘坐，给运输企业带来更多客流。我们有两
        大使命，其一是给乘客带来更安全更便宜的车，为此，
        所有加盟运输企业必须通过严格验证，保证车辆证件和
        保险齐全，绝对拒绝无牌无证无保险黑车。其二，给加
        盟车企带来更大收益。为此，我们把很多车企联合起
        来，流量互动，宣传广告一起做，从此告别宣传成本
        高，流量少的问题，让搞客运变得更简单。目前，我们
        已经和梦之旅，高校联谊，友谊快车，高校之旅等多家
        老牌高校车企建立战略联盟，更多车企正在加盟中。我
        们平台的注册会员经过短短一年多的发展，已经达200
        万人，日流量均达20000人。我们的目标是打造成全国
        最大的汽车票预定平台，为消费者和企业带来更大的便
        利，为社会贡献自已的一份力量。
    </div>

</template>

<script setup>
import goback from "../components/goback.vue";
import { GlGoBack } from "@kalimahapps/vue-icons";
import { useRouter } from 'vue-router';
import { ref, provide } from 'vue';
import Head from  '@/components/Header.vue';
const  parentHead = ref('关于我们');

const route = ref('/user');
provide('route', route);
</script>

<style scoped>



.title {
  margin-left: auto; /* 使标题居右 */
  font-size: 1.2em;
  font-weight: bold;
}

.content {
  /* 内容区域的样式 */

  padding: 20px;
  font-size: 1.1em;
  line-height: 1.5;
  color: #333;
  background-color: #fff; /* 白色背景 */
  border-radius: 5px; /* 圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  margin: 20px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.goback-wrapper {

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

}
</style>