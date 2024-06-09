
<template>
    <div>

    </div>
</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();

const routemessage = inject('routemessage');

const navigateToRoute = () => {
   router.go();
}
</script>

<style lang="scss" scoped>

</style>