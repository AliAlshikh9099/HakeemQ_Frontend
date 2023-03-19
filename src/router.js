import { createRouter, createWebHistory } from "vue-router";

import HomePage from './views/HomePage.vue';
import NewDoctor from './views/NewDoctor.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: HomePage},
        {path: '/register', component: NewDoctor}
    ]
});

export default router;