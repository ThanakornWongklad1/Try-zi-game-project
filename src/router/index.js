import { createRouter, createWebHistory } from 'vue-router'
import FirstPage from '../components/FirstPage.vue'
import GamePage from '../components/GamePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FirstPage
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage
    },
  ]
})

export default router
