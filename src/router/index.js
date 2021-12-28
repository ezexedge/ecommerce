import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Carrito from '../views/Carrito.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'
import Cliente from '../views/Cliente.vue'

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'register',
    component: Register
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout
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
