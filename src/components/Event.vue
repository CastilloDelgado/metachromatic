<script setup>

defineProps({
    event: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="border-b border-white text-white pb-4 border-dashed mb-3 select-none">
        <p class="font-serif text-xl font-bold capitalize">{{ event.title }}</p>
        <div class="font-mono text-[12px] flex space-x-2 mb-4 flex-wrap-reverse text-neutral-500">
            <p>{{ event.city }}</p>
            <p>{{ event.state }}</p>
            <p>{{ event.country }}</p>
            <p>{{ event.date }}</p>
            <p>{{ event.time }}</p>
        </div>
        <p class="text-sans text-justify text-sm mb-2" v-for="paragraph in event.description.split(/\r?\n/)" >{{ paragraph }}</p>
        <div v-if="event.images" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3 pb-1">
            <a v-for="image in event.images" :href="image.link" target="_blank">
                <div class="h-96 pb-4">
                    <img class="w-full h-full border-neutral-800 border object-cover" :src="image.src" :alt="image.caption"  />
                    <p class="text-end text-xs lowercase text-neutral-500 italic">{{ image.caption }}</p>
                </div>
            </a>
        </div>
        <div class="flex justify-end flex-wrap mt-3">
            <a target="_blank" :href="link.link" v-for="link in event.links"
                class="bg-white me-1 uppercase text-black px-2 mb-1 hover:bg-black border border-black hover:border-white hover:text-white font-mono text-xs">{{
            link.title
        }}</a>
        </div>
    </div>
</template>