import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Default',
      component: () => import('../views/Default.vue')
    },
    {
      path: '/Inicio',
      name: 'Inicio',
      component: () => import('../views/Inicio.vue')
    },
    {
      path: '/Buscar',
      name: 'Buscar',
      component: () => import('../views/Buscar.vue')
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: () => import('../views/Perfil.vue')
    }
  ]
})

export default router
