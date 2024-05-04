<template>
  <div>
      <RouterView />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { RouterLink,RouterView } from 'vue-router';
</script>

<style>

</style>