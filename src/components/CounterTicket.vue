<template>
    <div>
      <button @click="decrementCount">sub</button>
      <div>{{ label }}: {{ count }}</div>
      <button @click="incrementCount">add</button>
      <div>{{ price }}</div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
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