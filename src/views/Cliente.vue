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
               ...mapGetters(['carrito'])

           },methods:{
               eliminarProducto(id){
                 this.$store.dispatch('deleteProducto', id)

               }
           }

    }
</script>

<style lang="scss" scoped>

</style>