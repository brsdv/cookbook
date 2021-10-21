import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/charts',
        name: 'Charts',
        component: () => import('../views/Charts.vue')
    },
    {
        path: '/sliders',
        name: 'Sliders',
        component: () => import('../views/Sliders.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
