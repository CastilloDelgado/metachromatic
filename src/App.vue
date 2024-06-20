<template>
  <div class="w-screen h-screen  grid place-content-center background">
    <div class="w-screen grid place-content-center py-8 mx-auto bg-black">
      <p class="font-serif text-center uppercase text-2xl md:text-4xl font-bold text-white">Metachromatic</p>
      <div class="flex justify-between space-x-1 text-sm mb-2">
        <a class="text-neutral-400 hover:text-white capitalize font-sans font-light  hover:underline"
          href="https://www.instagram.com/metachromatic.inc/">Instagram</a>
        <a class="text-neutral-400 hover:text-white capitalize font-sans font-light  hover:underline"
          href="https://soundcloud.com/metachromatic">Soundcloud</a>
        <a class="text-neutral-400 hover:text-white capitalize font-sans font-light  hover:underline"
          href="https://www.youtube.com/@metachromatic_">YouTube</a>
      </div>
      <div class="h-2 w-full gradient-bar">
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url('./assets/logo.png');
  background-size: 200px;
}

.gradient-bar {
  background: rgb(251, 255, 0);
  background: linear-gradient(90deg, rgba(251, 255, 0, 1) 0%, rgba(34, 205, 50, 1) 32%, rgba(6, 0, 255, 1) 65%, rgba(255, 0, 0, 1) 100%);
}
</style>