import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import FoodListView from '../views/FoodListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/food/list',
      name: 'FoodList',
      component: FoodListView
    },
  ]
})

// Navigation Guards
router.beforeEach((to, from) => {
  // TODO: 未認証の場合はログイン画面へ遷移する
  if (!isAuthenticated() && to.name !== 'login') {
    return { name: 'Login' }
  }

  // 認証済みの場合は要求された画面へ遷移する
  return true
})

function isAuthenticated() {
  // TODO: 認証状況の確認
  return true
}

export default router
