import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import OkView from '../views/OkView.vue'
import NgView from '../views/NgView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/login/ok',
      name: 'login-ok',
      component: OkView
    },
    {
      path: '/login/ng',
      name: 'login-ng',
      component: NgView
    },
  ]
})

// Navigation Guards
router.beforeEach((to, from) => {
  // 未認証の場合はログイン画面へ遷移する
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
