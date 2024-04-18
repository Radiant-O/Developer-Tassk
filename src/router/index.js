import { createRouter, createWebHistory } from 'vue-router'
import FormData from '../components/userForm.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { path: '/', component: FormData },
         { path: '/items', component: () => import('../components/itemsPage.vue')},
         { path: '/students', component: () => import('../components/studentPage.vue')}
      ]
})


export default router
