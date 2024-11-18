<script setup>
import Bitacora from './components/Bitacora.vue';
import Layout from './components/Layout.vue';
import Loader from './components/Loader.vue';
// import image from './assets/liquid.jpeg';
import image from './assets/analepsis_cover.jpeg';


import { onMounted, ref } from 'vue';

const chars = ['|', '/', '-', "\\"]
const char = ref('|')

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
  <Layout>
    <div class="min-h-[60vh] grid place-content-center">
      <div class="w-full flex flex-col-reverse md:flex-row">
        <img :src="image" class="w-full md:w-1/2 mb-6" />
        <div class="mb-2 md:w-1/2 px-4 grid place-content-center">
          <div class="flex justify-between">
            <p v-for="x in [...Array(30).keys()]" class="text-center font-mono text-lg text-white">{{ char }}</p>
          </div>
          <div class="py-2">
            <p class="text-4xl font-bold font-serif text-white uppercase text-center">Metachromatic</p>
            <div class="flex justify-center font-mono text-sm space-x-2 mb-2">
              <a href="https://www.instagram.com/metachromatic.inc/" target="_blank"
                class="text-neutral-300 hover:text-white hover:italic hover:underline">Instagram</a>
              <a href="https://soundcloud.com/metachromatic" target="_blank"
                class="text-neutral-300 hover:text-white hover:italic hover:underline">Soundcloud</a>
              <a href="https://www.youtube.com/@metachromatic_" target="_blank"
                class="text-neutral-300 hover:text-white hover:italic hover:underline">YouTube</a>
            </div>
          </div>
          <a href="https://soundcloud.com/metachromatic/analepsis" target="_blank">
            <div class="text-white mb-2 group">
              <p class="text-center font-mono text-xs mb-2">* Último Lanzamiento *</p>
              <div class="py-5 bg-white hover:bg-black hover:text-white border border-white  text-black my-2 drop-shadow-sm">
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

    <Bitacora />
  </Layout>
</template>
