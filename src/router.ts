import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        component: () => import('/views/home.vue')
    },
    {
        path: '/about',
        alias: '/About',
        component: () => import('/views/about.vue')
    },
    {
        path: '/edit',
        alias: '/Edit',
        component: () => import('/views/edit.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router