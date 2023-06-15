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
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue'),
      children:[
        {
          path: 'overview',
          name: 'overview',
          component: ()=> import('../views/AdminOverview.vue')
        },
        {
          path: 'productos',
          name: 'productos',
          component: ()=> import('../views/AdminProducts.vue')
        },
        {
          path: 'ordenes',
          name: 'ordenes',
          component: ()=> import('../views/AdminOrders.vue')
        },
        {
          path: 'perfil',
          name: 'perfil',
          component: ()=> import('../views/AdminProfile.vue')
        }
      ]
    }
  ]
})

export default router
