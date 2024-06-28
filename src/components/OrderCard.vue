<template>
    <div>
        <div>
            <div>
                <div>
                    <van-icon name="clock-o" class="small-icon" />     
                </div>

                <div>
                    {{ dataStore.selectedDate }}
                </div>
                <div>
                    {{ chooseRouteStore.depatureTime }}
                </div>
            </div>

            <div>
                已提交，未支付
            </div>
        </div>

        <div>
            <div>
                <div>
                    <span>
                        上
                    </span>
                </div>
                <div>
                    {{ chooseRouteStore.chooseStartPoint }}
                </div>

               
            </div>

            <div>
                <div>
                    <span>
                        下
                    </span>
                </div>

                <div>
                    {{ chooseRouteStore.chooseEndPoint }}
                </div>
               
            </div>
        </div>

        <div>
            <!-- 生成五位数的验票码 -->
             <div>
                验票码: {{ generateRandomNumber() }}
             </div>
        </div>

        <div>
            <div>
                <!-- 微信的icon -->
            </div>
            <div>
                <button>
                    订单完成
                </button>
            </div>
        </div>
        
        
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import {useChooseRouteStore } from '@/stores/chooseRouteStore';
import { useDateStore } from '@/stores/dateStore';
import { useCityStore } from '@/stores/cityStore';
import { Select } from '@element-plus/icons-vue';

const dataStore = useDateStore();
const cityStore = useCityStore();

const chooseRouteStore = useChooseRouteStore();


// 随机生成五位数的数字
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 90000) + 10000;
  return randomNumber;
}


function completeOrder() {
  router.push({
    path: '/orderTicket/unfinished',
    query: { emptyState: true } // 使用 emptyState 参数
  });
}
</script>

<style scoped></style>