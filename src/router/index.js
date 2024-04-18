import { createRouter, createWebHistory } from 'vue-router'
// import { useStore } from '../stores';
import FormData from '../components/form.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        { path: '/', component: FormData },
        { path: '/items', component: () => import('../components/data.vue'), props: { title: 'Items', items: ['Mango', 'Cashew', 'Apple'] } },
        { path: '/students', component: () => import('../components/data.vue'), props: { title: 'Students', items: ['James', 'Paul', 'Peter'] } }
      ]
})

// router.beforeEach((to, from, next) => {
//   const store = useStore(); 
//   if (to.path === '/' && from.path !== '/') {
//     store.clearUserData(); // Using the clearUserData function from the store
//   }
//   next();
// });



export default router
