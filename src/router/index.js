import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin.vue'
import Carrito from '../views/Carrito.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Checkout from '../views/Checkout.vue'
import Cliente from '../views/Cliente.vue'
import Producto from '../views/Producto.vue'

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
    component: Admin,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('user')){
        next()
      }else{
        next('/login')
      }
  }
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: Carrito
  },
    {
    path: '/producto/:id',
    name: 'producto',
    component: Producto
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
    component: Checkout,
    beforeEnter: (to, from, next) => {
      if(localStorage.getItem('user')){
        next()
      }else{
        next('/login')
      }
  }
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente,
    beforeEnter: (to, from, next) => {
        if(localStorage.getItem('user')){
          next()
        }else{
          next('/login')
        }
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
