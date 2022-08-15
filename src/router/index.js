import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/companyApproval',
      name: 'Company Approval',
      component: () => import('../views/CompanyApprovalView.vue')
    }
  ]
})

export default router
