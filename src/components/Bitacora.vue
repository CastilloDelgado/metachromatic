<script setup>
import Event from './Event.vue';
import { BITACORA } from "../constants"
import Loader from './Loader.vue';

</script>

<template>
    <div>
        <p
            class="font-mono  text-white uppercase font-light text-xl border-b border-t border-dashed mb-4 py-2 text-center">
            Bitacora</p>
        <Event v-for="event in BITACORA.events" :event="event" />
    </div>
</template>