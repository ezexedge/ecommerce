<template>
    <div class="container mt-5">
        <h1>Compras realizadas</h1>

    <div class="col-12 d-flex justify-content-center  ">


    <div v-if="loading === false && compras.length === 0" class="list-group mt-5">
  <p class="list-group-item list-group-item-action list-group-item-success">No has realizado una compra</p>
</div>

<div v-if="loading === true" class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>


    <div v-else class="col-12 p-0 d-flex justify-content-between flex-wrap ">
        
        <div  v-for="(item, index) in compras" :key="index" class="mt-5 p-0  card text-white bg-primary mb-3 col-5" >
  <div class="card-header">fecha: {{item.fecha}}</div>
  <div class="card-body">
    <h4 class="card-title">Valor de compra: {{item.precioFinal}}</h4>
    <h4 class="card-title">Direccion:</h4>
        <p class="card-text">localidad: {{item.direccion.localidad}} </p>
        <p class="card-text">calle: {{item.direccion.calle}} </p>
        <p class="card-text">numero: {{item.direccion.numero}}</p>

    <h4 class="card-title">Lista de  compra:</h4>
        <ul class="list-group" v-for="(subitem,index) in item.compra" :key="index">
            <li class="list-group-item active" > Nombre: {{subitem.nombre}}</li>    
            <li class="list-group-item active" > cantidad: {{subitem.cantidad}}</li>    
            <li class="list-group-item active" > precio: {{subitem.precio}}</li>    

      </ul>
    </div>
  </div>
</div>
</div>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'

import * as firebase from "firebase/app";
import 'firebase/firestore';
    export default {
        data(){
            return{
                compras: [],
                loading: false
            }
        },
        methods:{

           async  getComprar(valor){

            this.loading = true
              const result = await firebase.firestore().collection('compras').get()

              let docs = []
             result.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

            let arr = docs.filter(val => val.usuario === valor)
            console.log('respuesta',arr)

            this.compras = arr
            this.loading = false
            }
        
        },
        computed:{
               ...mapGetters(['currentUser'])

        },
        mounted(){
            this.getComprar(this.currentUser.email)
        }
    }
</script>

<style lang="scss" scoped>

</style>