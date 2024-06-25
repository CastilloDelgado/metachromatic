<script setup>

defineProps({
    event: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <div class="border-b border-white text-white pb-4 border-dashed mb-3">
        <p class="font-serif text-xl font-bold capitalize">{{ event.title }}</p>
        <div class="font-mono text-[12px] flex space-x-2 mb-4 flex-wrap-reverse">
            <p>{{ event.city }}</p>
            <p>{{ event.state }}</p>
            <p>{{ event.country }}</p>
            <p>{{ event.date }}</p>
            <p>{{ event.time }}</p>
        </div>
        <p class="text-sans text-justify text-sm">
            {{ event.description }}
        </p>
        <div class="flex justify-end flex-wrap mt-3">
            <a target="_blank" :href="link.link" v-for="link in event.links"
                class="bg-white me-1 uppercase text-black px-2 mb-1 hover:bg-black border border-black hover:border-white hover:text-white font-mono text-xs">{{
            link.title
        }}</a>
        </div>
    </div>
</template>