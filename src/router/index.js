import { createRouter, createWebHistory } from 'vue-router';
import HomeIndex from '../views/home/Index.vue';
import LoginIndex from '../views/login/Index.vue';
import ProductIndex from '../views/product/Index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginIndex
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeIndex
    },
    {
      path: '/product',
      name: 'Product',
      component: ProductIndex
    },

    // {
    //   path: '/add',
    //   name: 'add',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AddView.vue')
    // }
  ]
})

export default router
