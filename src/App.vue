<template>
  <div id="app">
        <transition name="slide">
            <router-view />
        </transition>
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
.slide-enter-active, .slide-leave-active {
    transition: transform 0.2s ease;
}
.slide-enter, .slide-leave-to  .slide-leave-active-in  {
    transform: translateX(100%),
    
}
.slide-leave-active {
    transform: translateX(-150%);
}
</style>