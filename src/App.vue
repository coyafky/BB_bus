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
  .router-link-active {
  text-decoration: none;
  color: none;
}
a{
    text-decoration: none;
    color: none;
}
</style>