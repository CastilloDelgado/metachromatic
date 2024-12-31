<script setup>
import Bitacora from '../components/Bitacora.vue';
import LogoAscii from '../components/LogoAscii.vue';
import NewsBanner from '../components/NewsBanner.vue';
import Snow from '../components/Snow.vue';
</script>

<template>
    <Snow />
    <NewsBanner />
    <Bitacora />
    <div class="py-4 w-full flex flex-row space-x-2 px-auto justify-center">
        <LogoAscii />
    </div>
</template>
