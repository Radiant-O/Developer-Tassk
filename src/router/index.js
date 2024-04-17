import { createRouter, createWebHistory } from 'vue-router'
import Form from '../components/Form.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Form },
    { path: '/items', component: () => import('../components/data.vue'), props: { title: 'Items', items: ['Mango', 'Cashew', 'Apple'] } },
    { path: '/students', component: () => import('../components/data.vue'), props: { title: 'Students', items: ['James', 'Paul', 'Peter'] } }
  ]
  
});

router.beforeEach((to, from, next) => {
  if (to.path === '/' && from.path !== '/') {
    store.clearUserData(); // Using the clearUserData function from the store
  }
  next();
});

export default router
