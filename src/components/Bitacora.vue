<script setup>
import Event from './Event.vue';
import { BITACORA } from "../constants"
import Loader from './Loader.vue';

</script>

<template>
    <div>
        <p class="font-mono  text-white uppercase font-light text-2xl border-b border-dashed mb-4 pb-2 text-center">
            Bitacora</p>
        <Event v-for="event in BITACORA.events" :event="event" />
    </div>
</template>