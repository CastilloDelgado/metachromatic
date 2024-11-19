<script setup>
import { useRoute } from "vue-router";
import logo from "../assets/m_logo.png"

const route = useRoute()

</script>

<template>
    <div class="border-b border-white sticky top-0 bg-black z-10">
        <div class="flex md:flex-row max-w-4xl mx-auto justify-between px-6 py-2 md:pt-4">
            <RouterLink to="/">
                <p class="w-1/3 text-[16px] pt-1 md:pt-0 md:text-2xl text-white text-center md:text-start font-serif uppercase font-bold select-none">Metachromatic</p>
            </RouterLink>
            <div class="w-1/3 flex justify-center">
                <RouterLink to="/">
                    <img :src="logo" alt="" class="w-7 h-7">
                </RouterLink>
            </div>
            <div class="w-1/3 pt-[5px] md:pt-1">
                <div class="flex justify-end font-mono font-light text-xs md:text-sm space-x-2 md:space-x-4">
                    <RouterLink to="/">
                        <p 
                            class="text-white "
                            :class="{
                                'italic hover:no-underline font-bold': route.name === 'Home',
                                'hover:italic hover:underline': route.name !== 'Home',
                            }"
                        >Bitacora</p>
                    </RouterLink>
                    <RouterLink to="/analepsis">
                        <p 
                            class="text-white text-nowrap"
                            :class="{
                                'italic hover:no-underline font-bold': route.name === 'Volumen_1',
                                'hover:italic hover:underline': route.name !== 'Volumen_1',
                            }"
                        >Analpesis</p>
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>