<template>
  <div>

    <div v-if="loading === false" class="container mt-5">
        <div class="col-12 d-flex  flex-wrap  justify-content-around" >
            <div v-for="(item,index) in lista" :key="index" class="card  col-3  ">
  <img class="card-img-top" :src="item.imagen" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">{{item.nombre}}</h4>
    <div class="card-text">
      <p> Precio: ${{item.precio}}</p>
      <p>Cantidad: {{item.cantidad}}</p>


    </div>
    
    <a href="#!" v-if="encontrado(item.id,carrito) === false" @click="agregar(item)" class="btn btn-primary">Agregar a carrito</a>
      <a href="#!" v-else :disabled="true" class="btn btn-secondary">Agregado al carrito</a>
    <a href="#!"  @click="redirectProducto(item.id)"  class="mt-2 btn btn-success">Ver producto</a>

  </div>
</div>

        </div>

    </div>
    <div v-else class="spinner-border mt-5" role="status">
  <span class="sr-only">Loading...</span>
</div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'
import {mapGetters} from 'vuex'

  export default {

    data(){
      return{
        lista: [],
        loading: false
      }
    },
    computed:{
               ...mapGetters(['carrito'])
    },
    methods:{
      agregar(obj){
      
             this.$store.dispatch("setProducto", obj)
      },
      redirectProducto(val){
       
                       this.$router.push(`/producto/${val}`)
      },
      async getAll(){

        this.loading = true

             const snapshot = await firebase.firestore().collection('articulos').get()
            let docs = []
             snapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

        if(snapshot){
          this.loading = false
        }
        console.log('doccc',docs)
        this.lista = docs
      },
          
      encontrado(id,carrito){
          let encontrado = carrito.find(val => val.id === id)
          if(encontrado){
            return true
          }else{
            return false
          }
      }

    },
    mounted(){

      this.getAll()

    }
  }
</script>

<style lang="css" scoped>
   .card {
      border: 1px solid #ccc;
      background-color: #f4f4f4;
      margin: 1px !important;
      margin-bottom: 10px!important;
    }
</style>