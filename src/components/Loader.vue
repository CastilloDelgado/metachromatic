<script setup>
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
    <p class="text-center font-mono text-lg text-white">{{ char }}</p>
</template>