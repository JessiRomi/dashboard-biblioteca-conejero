import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/DashboardPage.vue'
import BibliotecaPage from '@/pages/BibliotecaPage.vue'
import LibrosForm from '@/components/LibrosForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardPage,
      children: [
      { path: 'biblioteca', component: BibliotecaPage },
      { path: 'biblioteca/nuevo', component: LibrosForm },
      ],
    },
  ],
})

export default router
