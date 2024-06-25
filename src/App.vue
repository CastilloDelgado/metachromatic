<script setup>
import Bitacora from './components/Bitacora.vue';
import Layout from './components/Layout.vue';
import Loader from './components/Loader.vue';
</script>

<template>
  <Layout>
    <div class="min-h-[60vh] grid place-content-center">
      <div class="mb-6">
        <div class="flex justify-between">
          <Loader v-for="x in [...Array(30).keys()]" />
        </div>
        <div class="py-2">
          <p class="text-4xl font-bold font-serif text-white uppercase text-center">Metachromatic</p>
          <div class="flex justify-center font-mono text-sm space-x-2">
            <a href="https://www.instagram.com/metachromatic.inc/" target="_blank"
              class="text-neutral-300 hover:text-white hover:italic hover:underline">Instagram</a>
            <a href="https://soundcloud.com/metachromatic" target="_blank"
              class="text-neutral-300 hover:text-white hover:italic hover:underline">Soundcloud</a>
            <a href="https://www.youtube.com/@metachromatic_" target="_blank"
              class="text-neutral-300 hover:text-white hover:italic hover:underline">YouTube</a>
          </div>
        </div>
        <div class="flex justify-between">
          <Loader v-for="x in [...Array(30).keys()]" />
        </div>
      </div>
    </div>

    <Bitacora />
  </Layout>
</template>
