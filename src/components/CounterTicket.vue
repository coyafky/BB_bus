<template>
  <div class="counter">
    <button @click="decrementCount" class="sub">
     
        <el-icon>
          <Minus />
        </el-icon>
     

    </button>
    <div class="count"> {{ count }}</div>
    
      <button @click="incrementCount" class="add">
        <el-icon> 
        <Plus />
        </el-icon>
      </button>
 

  </div>
</template>

<script setup>
import { computed } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { Minus } from '@element-plus/icons-vue'
const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  label: {
    type: String,
    default: '计数器',
  },
  price: {
    type: String,
    default: '价格',
  },
});

const emit = defineEmits(['update:modelValue']);

const count = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function incrementCount() {
  count.value++;
}

function decrementCount() {
  count.value--;
}
</script>

<style scoped>
.counter {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.add {
  color: white;
  background-color: red;
  border: none;
  border-radius: 20%;
}
.sub {
  color: white;
  background-color: red;
  border: none;
  border-radius: 20%;
}

.count{
  width: 50px;
  height: 20px;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>