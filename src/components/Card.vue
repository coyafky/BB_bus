<template>
    <div class="card">
        <div class="card-header">
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <div class="time">
                <div>
                    start_time
                </div>
                至
                <div>
                    end_time
                </div>
            </div>

            <div class="route">
                <div class="start_route">
                    <!-- icon 起 -->
                    <span>
                        起
                    </span>
                    大剧院地铁站c口（前面50米帝王大厦公交站）>车公庙地铁B出口
                    （门口候车）> 深大地铁站A3出口右手边
                </div>

                <div class="end_route">
                    <!-- icon 终 -->
                    <span>终</span>
                    大剧院地铁站c口（前面50米帝王大厦公交站）>车公庙地铁B出口
                    （门口候车）> 深大地铁站A3出口右手边
                </div>
            </div>

            <div class="buy_ticket">
                <button @click="navigateToStartEndPiontPicker">
                    {{ 49.8}} 正价票
                    <!-- 跳转到选择上下车点页面 -->
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter();
const props = defineProps({
    cardData: {
        type: Object,
        required: true
    }
})
  const navigateToStartEndPiontPicker = () => {
      router.push('/StartEndPiontPicker');
    };
// 接受父组件传入的 start end 信息


</script>

<style scoped>
.card-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px auto;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #ffffff;
   
    
}

.route {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    margin: 0 auto;
    padding: 16px;
   
    border-radius: 5px;
    word-wrap: break-word; /* 添加这行来允许文本换行 */
    word-break: break-all; /* 添加这行来允许长单词换行 */
}

.time{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    margin: 0 auto;
    padding: 1rem;
    border-radius: 5px;
  
}


.buy_ticket{
    display: flex;
    width: 400px;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
}
.buy_ticket button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35px;
    width: 100%;
    background-color: #24a4ff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

span{
 

    align-items: center;
    color: #c4dea9;
    border: 1px solid #c4dea9;
    border-radius: 50%;
}
</style>
