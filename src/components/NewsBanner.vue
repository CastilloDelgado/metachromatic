<script setup>
import image from '../assets/analepsis_cover.jpeg';
import { onMounted, ref } from 'vue';

const chars = ['|', '/', '-', "\\"]
const char = ref('|')

const links = ref([
    {
        title: "Spotify",
        link: "https://open.spotify.com/track/6KMTdas2Abkc5hQ8mDMPT1?si=f8217fb0f3f34c0c",
        buttonColor: "bg-green-600 text-white"
    },
    {
        title: "Apple Music",
        link: "https://music.apple.com/mx/album/analepsis-single/1780813174?l=en-GB",
        buttonColor: "bg-red-600 text-white"
    },
    {
        title: "Soundcloud",
        link: "https://soundcloud.com/metachromatic/analepsis",
        buttonColor: "bg-orange-600 text-white",

    },
    {
        title: "Bandcamp",
        link: "https://metachromatic.bandcamp.com/track/analepsis",
        buttonColor: "bg-teal-600 text-white"
    },

])

onMounted(() => {
    let count = 0
    setInterval(() => {
        if (count < chars.length) {
            char.value = chars[count]
            count = count + 1
            if (count === chars.length) {
                count = 0
            }
        }
    }, 200)
})
</script>

<template>
   <div class="min-h-[50vh] grid place-content-center">
      <div class="w-full flex gap-4 flex-col-reverse md:flex-row">  
        <img :src="image" class="object-cover md:w-1/2 mb-6 p-4 md:p-0" />
        <div class="mt-2 md:mt-0 mb-0 md:w-1/2 px-4 grid place-content-center">
          <div class="flex justify-between">
            <p v-for="x in [...Array(30).keys()]" class="text-center font-mono text-lg text-white">{{ char }}</p>
          </div>
          <div class="py-2 md:py-0">
            <p class="text-2xl font-bold font-serif text-white uppercase text-center">Metachromatic</p>
            <div class="flex flex-col md:flex-row">
                        <a 
                            target="_blank" 
                            :href="link.link" 
                            v-for="link in links"
                            :class="`${link.buttonColor || 'bg-white'}`"
                            class="text-center md:text-leftme-1 text-nowrap uppercase text-black px-2 mb-1 hover:bg-black border border-black hover:border-white hover:text-white font-mono text-xs">
                            {{link.title}}
                        </a>
                    </div>
          </div>
          <a href="https://soundcloud.com/metachromatic/analepsis" target="_blank">
            <div class="text-white mb-2 ">
              <p class="text-center font-mono text-xs mb-2">* Último Lanzamiento *</p>
              <div class="py-5 group bg-white hover:bg-black hover:text-white border border-white  text-black my-2 drop-shadow-sm">
                <p class="text-center text-2xl font-serif font-bold uppercase italic  ">Analepsis</p>
                <p class="text-center text-sm font-mono normal-case group-hover:underline ">
                  Escuchar en Soundcloud
                </p>
              </div>
              <p class="text-center font-mono text-xs mt-2 mb-2">* Último Lanzamiento *</p>
            </div>
          </a>
          <div class="flex justify-between py-2">
            <p v-for="x in [...Array(30).keys()]" class="text-center font-mono text-lg text-white">{{ char }}</p>
          </div>
        </div>
      </div>
    </div>
</template>