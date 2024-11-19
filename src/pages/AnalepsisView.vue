<script setup>
import cover from '../assets/analepsis_cover.jpeg';
import bannerImage from "../assets/analepsis/banner_image.jpg"

import verticalImage1 from "../assets/analepsis/vertical_1.jpeg"
import verticalImage3 from "../assets/analepsis/vertical_3.jpeg"
import verticalImage4 from "../assets/analepsis/vertical_4.jpeg"

import cover1 from "../assets/analepsis/cover_1.jpeg"
import cover2 from "../assets/analepsis/cover_2.jpeg"
import cover3 from "../assets/analepsis/cover_3.jpeg"
import cover4 from "../assets/analepsis/cover_4.jpeg"
import cover5 from "../assets/analepsis/cover_5.jpeg"
import cover6 from "../assets/analepsis/cover_6.jpeg"

import coverTest1 from "../assets/analepsis/cover_test_1.jpeg"
import coverTest2 from "../assets/analepsis/cover_test_2.jpeg"
import coverTest3 from "../assets/analepsis/cover_test_3.jpeg"
import coverTest4 from "../assets/analepsis/cover_test_4.jpeg"
import coverTest5 from "../assets/analepsis/cover_test_5.jpeg"
import coverTest6 from "../assets/analepsis/cover_test_6.jpeg"


import { ref } from 'vue';
import LogoAscii from '../components/LogoAscii.vue';

const verticalImages = ref([
    verticalImage1,
    verticalImage3,
    verticalImage4,
]);

const grid1 = ref([
    cover1,
    cover2,
    cover3,
    cover4,
    cover5,
    cover6,
]);

const grid2 = ref([
    coverTest2,
    coverTest3,
    coverTest4,
    coverTest1,
    coverTest5,
    coverTest6,
]);

const links = ref([
    {
        title: "Escuchar en Soundcloud",
        link: "https://soundcloud.com/metachromatic/analepsis"
    },
    {
        title: "Escuchar en Bandcamp",
        link: "https://metachromatic.bandcamp.com/track/analepsis"
    },

])

</script>

<template>
    <div class="flex flex-col md:flex-row text-white">
        <div class="w-full md:w-1/2 mb-4 md:mb-0 md:grid md:place-content-between md:pb-11">
            <div class="mb-4 md:mb-0">
                <p class="font-mono text-sm border-y py-1 mb-4 text-center">***** Track Info General *****</p>
                <div class="flex justify-center md:justify-end h-max gap-2">
                    <p class="text-neutral-400 font-mono text-xs mt-2">Título: </p>
                    <p class="text-2xl font-bold font-serif">Analepsis</p>
                </div>
                <div class="flex justify-center md:justify-end h-max gap-2">
                    <p class="text-neutral-400 font-mono text-xs mt-1">Key: </p>
                    <p class="">C Frigio</p>
                </div>
                <div class="flex justify-center md:justify-end h-max gap-2">
                    <p class="text-neutral-400 font-mono text-xs mt-1">BPM: </p>
                    <p class="">127</p>
                </div>
                <div class="flex justify-center md:justify-end h-max gap-2">
                    <p class="text-neutral-400 font-mono text-xs mt-1">Generos: </p>
                    <p class="">Techno, Breakbeat, Acid Techno</p>
                </div>
                <div class="flex justify-center md:justify-end h-max gap-2 mb-1">
                    <p class="text-neutral-400 font-mono text-xs mt-1">Créditos: </p>
                    <a href="https://www.instagram.com/metachromatic.inc/">
                        <p class="">Metachromatic</p>
                    </a>
                </div>
                <div class="flex justify-center md:justify-end h-max gap-2">
                    <p class="text-neutral-400 font-mono text-xs mt-1">Links: </p>
                    <div class="flex flex-col md:flex-row">
                        <a 
                            target="_blank" 
                            :href="link.link" 
                            v-for="link in links"
                            class="bg-white me-1 text-nowrap uppercase text-black px-2 mb-1 hover:bg-black border border-black hover:border-white hover:text-white font-mono text-xs">
                            {{link.title}}
                        </a>
                    </div>
                </div>
            </div>
            <div class="">
                <a href="https://metachromatic.bandcamp.com/track/analepsis" target="_blank">
                    <p class="text-neutral-400 font-mono text-xs md:mb-1">Escuchar en Bandcamp</p>
                </a>
                <iframe class="mt-1 md:mt-4 lg:mt-0" style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/track=63948725/size=large/bgcol=333333/linkcol=fe7eaf/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://metachromatic.bandcamp.com/track/analepsis">Analepsis by Metachromatic</a></iframe>
            </div>
        </div>
        <div class="w-full md:w-1/2 md:p-6 mb-4 md:mb-0">
            <div class="mt-1 flex justify-start font-mono text-xs mb-1 text-neutral-400">Click para escuchar la canción en Soundcloud</div>
            <a href="https://soundcloud.com/metachromatic/analepsis" target="_blank">
                <img :src="cover" alt="">
            </a>
            <div class="mt-1 flex justify-end font-mono text-xs text-neutral-400">Track Cover</div>
        </div>
    </div>
    <img class="w-full object-cover h-[90vh] md:max-h-[40vh] rotate-180" :src="bannerImage" alt="">

    <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <img v-for="image in verticalImages" :src="image" alt="">
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mt-4">
        <img class="w-full" v-for="image in grid1" :src="image" alt="">
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-3 justify-center gap-4 mt-4">
        <img class="w-full" v-for="image in grid2" :src="image" alt="">
    </div>

    <div class="py-8 w-full flex flex-row space-x-2 px-auto justify-center">
        <LogoAscii />
    </div>
</template>