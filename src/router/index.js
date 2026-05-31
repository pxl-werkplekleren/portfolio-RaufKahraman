import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Wpl1InfoView from '../views/Wpl1InfoView.vue'
import Wpl2InfoView from '../views/Wpl2InfoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/wpl1',
    name: 'wpl1',
    component: Wpl1InfoView,
  },
  {
    path: '/wpl2',
    name: 'wpl2',
    component: Wpl2InfoView,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
