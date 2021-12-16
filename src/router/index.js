import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../views/Auth.vue'
import Admin from '../views/Admin.vue'
import Cliente from '../views/Cliente.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'auth',
    component: Auth
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
