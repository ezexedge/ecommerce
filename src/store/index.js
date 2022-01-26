import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: [],
    currentUser: localStorage.getItem('user') ?   JSON.parse(localStorage.getItem('user'))  : null
  },
  mutations: {
    SET_PRODUCTO(state,producto){
      state.carrito.push(producto)
    },
    SET_VACIAR(state){
      state.carrito = []
    },
    DELETE_PRODUCTO(state,id){
      state.carrito = state.carrito.filter(val => val.id !== id)
    },
      SET_USER(state,user){
      localStorage.setItem('user',JSON.stringify(user))
      state.currentUser = user
    },
    LOGOUT_USER(state){
      localStorage.removeItem('user')
      
      state.currentUser = null
    }
    
  },
  actions: {
    setVaciar({commit}){
      commit('SET_VACIAR')
      },
    setProducto({commit},producto){
      commit('SET_PRODUCTO',producto)
  },
  deleteProducto({commit},producto){
    commit('DELETE_PRODUCTO',producto)
},
    setUser({commit},user){
      commit('SET_USER',user)
    },
    logoutUser({commit}){
    commit('LOGOUT_USER')
    }
},
  getters:{
    carrito: state => state.carrito,
    precioTotal: state =>  state.carrito.length  > 0 ?  state.carrito.reduce((sum,li) => sum +  Number(li.precio),0 ) : 0 ,
    currentUser: state => state.currentUser,

  },

  
  modules: {
  }
})
