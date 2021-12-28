<template>
    <div class="container mt-5">
    
<table class="table">
  <thead>
    <tr>
      <th>id</th>
            <th>nombre</th>
      <th>precio</th>
        <th>cantidad</th>
      <th>eliminar</th>

    </tr>
  </thead>
  <tbody>
   <tr v-for="(item, index) in carrito" :key="index">
    <td>{{ item.id }}</td>
    <td>{{item.nombre}}</td>
      <td>{{ item.precio }}</td>
        <td>{{ item.cantidad }}</td>
                <td><a href="#" @click="eliminarProducto(item.id)" class="btn btn-danger">Eliminar</a></td>

  </tr>
  </tbody>
</table>
<div class="col-12 d-flex justify-content-end mt-4 pr-5">
<h3 class="font-weight-bold">Precio final: {{precioTotal}}</h3>
</div>
  <div class="col-12 d-flex justify-content-end mt-4 pr-5">
  <button v-if="carrito.length > 0 && currentUser !== null" @click="redirectCheckout()" class="btn btn-success">Finalizar Compra</button>
    <button v-if="currentUser === null" @click="redirectLogin()" class="btn btn-success">Iniciar sesion</button>

  </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
           data(){
               return {
                productos : [],
                valor: ''
               }
           },
             computed: {
               ...mapGetters(['carrito','precioTotal','currentUser'])
              

           },methods:{
               eliminarProducto(id){
                 this.$store.dispatch('deleteProducto', id)

               },
               redirectCheckout(){
                this.$router.push('/checkout')
               },
                    redirectLogin(){
                this.$router.push('/login')
               }
           }

    }
</script>

<style lang="scss" scoped>

</style>