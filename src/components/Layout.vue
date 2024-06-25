<script setup>
import Header from './Header.vue';
import Footer from "./Footer.vue"
</script>

<template>
    <div class="bg-black min-h-screen">
        <Header />
        <div class="min-h-screen max-w-2xl mx-auto">

            <slot />

        </div>
        <Footer />
    </div>
</template>