<script setup>
import Bitacora from './components/Bitacora.vue';
import Layout from './components/Layout.vue';
import Loader from './components/Loader.vue';
import image from './assets/liquid.jpeg';

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
          <div class="text-white mb-2">
            <p class="text-center font-mono text-xs mb-2">* Próximo Lanzamiento *</p>
            <div class="py-6 bg-white">
              <p class="text-center text-2xl font-serif font-bold uppercase italic text-black bg-white">Un sin sentido</p>
              <p class="text-center text-sm  font-mono font-bold  text-black bg-white">
                XX-10-2024
              </p>
            </div>
            <p class="text-center font-mono text-xs mt-2 mb-2">* Próximo Lanzamiento *</p>
          </div>
          <div class="flex justify-between py-2">
            <p v-for="x in [...Array(30).keys()]" class="text-center font-mono text-lg text-white">{{ char }}</p>
          </div>
        </div>
      </div>
      
    </div>

    <Bitacora />
  </Layout>
</template>
