<template>
  <footer class="footer">
    <router-link to="/" class="All_footer_item">

      <div class="footer-icon">
        <AkHomeAlt1 />
      </div>
      <div class="footer-text">
        首页
      </div>


    </router-link>
    <router-link to="/orderTicket" class="All_footer_item">
      <div class="footer-icon">
        <el-icon :class="icons">
        <ShoppingCart />
      </el-icon>

      </div>
     
      <div class="footer-text">
        订单
      </div>



    </router-link>
    <router-link to="/user" class="All_footer_item">
    
        <div class="footer-icon">
          <el-icon :class="icons">
            <User />
          </el-icon>
        </div>
        <div class="footer-text">
          我的
        </div>
    </router-link>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import { AkHomeAlt1 } from "@kalimahapps/vue-icons";
import { BsTicketPerforatedFill } from "@kalimahapps/vue-icons";
import { User } from '@element-plus/icons-vue';
import { ElIcon } from 'element-plus';
import { ShoppingCart } from '@element-plus/icons-vue';
// 定义props，如果需要传递参数可以在这里定义
const props = defineProps()

// 可以在这里添加其他逻辑或功能
</script>

<style scoped>
.footer {
  /* 样式定义 */
  display: flex;
  justify-content: space-around;
  align-items: last baseline;
  height: 50px;
  background-color: rgb(255, 255, 255);

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
}



.footer .router-link-active svg {
  height: 24px;
  /* 调整图标高度，确保与文字对齐 */
  width: 24px;
  /* 保持宽高比 */
  margin-bottom: 0px;

  /* 添加图标和文字之间的间距 */
}

.All_footer_item {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: inherit;
  align-items: last baseline;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #969696;
}






.footer-item span {
  margin-bottom: 0px;
  padding-bottom: 0px;

}

.footer-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: auto;

  margin-bottom: 5px;
  font-size: 25px;
}

.footer-text {

  font-size: 12px;
}

.All_footer_item.router-link-active .footer-icon svg { 
  color: red; 
}
</style>