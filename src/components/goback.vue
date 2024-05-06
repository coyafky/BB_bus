
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
const route = inject('route');

const navigateToRoute = () => {
  router.push(route.value);
}

</script>