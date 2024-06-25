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
        <p class="font-serif text-xl font-bold uppercase">{{ event.title }}</p>
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
    </div>
</template>