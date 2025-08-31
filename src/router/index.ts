import { createRouter, createWebHistory } from 'vue-router'
import FormDemo from '../pages/FormDemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form-demo',
      component: FormDemo,
    },
  ],
})

export default router
