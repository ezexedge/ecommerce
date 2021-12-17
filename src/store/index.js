import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carrito: [],
    pepas: 'pepasss'
  },
  mutations: {
    SET_PRODUCTO(state,producto){
      state.carrito.push(producto)
    },
    DELETE_PRODUCTO(state,id){
      state.carrito = state.carrito.filter(val => val.id !== id)
    },
    
  },
  actions: {

    setProducto({commit},producto){
      commit('SET_PRODUCTO',producto)
  },
  deleteProducto({commit},producto){
    commit('DELETE_PRODUCTO',producto)
},
 
},
  getters:{
    carrito: state => state.carrito
  },

  
  modules: {
  }
})
