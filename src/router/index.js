import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../pages/HomeView.vue";
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
    ]
})