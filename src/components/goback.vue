
<template>
  <button @click="navigateToRoute">
    <GlGoBack />
  </button>
</template>

<script setup>

import { GlGoBack } from "@kalimahapps/vue-icons";
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const router = useRouter();

const navigateToRoute = () => {
   router.go(-1);
}

</script>

<style scoped >
button {
  border: none;
  background: none;
  color: inherit;
  padding: 0;
  font: inherit;
  cursor: pointer;
}
</style>