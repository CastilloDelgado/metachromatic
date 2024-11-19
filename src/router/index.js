import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import VolumneIView from "../pages/VolumneIView.vue";
import AnalepsisView from "../pages/AnalepsisView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        }, 
        {
            path: '/analepsis',
            name: 'Analepsis',
            component: AnalepsisView,
        }, 
        // {
        //     path: '/volumen-1',
        //     name: 'Volumen_1',
        //     component: VolumneIView,
        // }, 
    ]
})