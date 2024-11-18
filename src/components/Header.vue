<script setup>
import logo from "../assets/m_logo.png"
</script>

<template>
    <div class="border-b border-white sticky top-0 bg-black z-10">
        <div class="flex md:flex-row max-w-4xl mx-auto justify-between px-6 py-2 md:pt-4">
            <p class="w-1/3 text-md pt-1 md:pt-0 md:text-2xl text-white text-center md:text-start font-serif uppercase font-bold select-none">Metachromatic</p>
            <div class="w-1/3 flex justify-center">
                <img :src="logo" alt="" class="w-7 h-7">
            </div>
            <div class="w-1/3 pt-[5px] md:pt-1">
                <div class="flex justify-end font-mono font-light text-xs md:text-sm space-x-4">
                    <p class="text-white italic underline font-bold">Bitacora</p>
                    <p class="text-white hover:italic hover:underline">Origami</p>
                </div>
            </div>
        </div>
    </div>
</template>