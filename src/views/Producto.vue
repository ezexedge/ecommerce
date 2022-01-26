<template>
    <div class="container mt-5">
      <h1 class="text-center">{{producto.nombre}}</h1>
        <div class="col-12 d-flex justify-content-center mt-3">

        <div class="imagen" :style="{ backgroundImage: `url('${producto.imagen}')` }" >
        
        </div>

</div>
              <h3 class="text-center font-weight-bold mt-3">$ {{producto.precio}} </h3>
              <h4 class="text-center font-weight-light mt-3">Cantidad disponible {{producto.cantidad}} </h4>
        <div v-if="Number(producto.cantidad) > 0">

              <div class="col-12  d-flex justify-content-center mt-3">
                <h4 class="text-center font-weight-light mt-1 mr-3">Cantidad </h4>
  

        <input   type="number" v-model="nuevaCantidad"   class="col-3 form-control" :class="nuevaCantidad > Number(producto.cantidad) ?  'col-3 form-control is-invalid' : null"  placeholder="Ingrese un valor" :disabled="encontrado(producto.id,carrito) === true ? true : false" value="1" :max="producto.cantidad" >
           
           

              </div>
              <p class="text-danger text-center mt-2" v-if="nuevaCantidad > Number(producto.cantidad)" >El valor ingresado excede a la cantidad disponible</p>


      </div>
              <div class="col-12   d-flex justify-content-center">



                <div class="alert alert-danger mt-3" v-if="Number(producto.cantidad) === 0" role="alert">
                <strong>Ups!</strong> No hay mas stock
                </div>

            <div v-else>

              <div  class="mt-3"  @click="agregar(producto)"  v-if="encontrado(producto.id,carrito) === false">
                                <button type="button" class="btn btn-success p-3 mt-3" :disabled="nuevaCantidad > Number(producto.cantidad)" >Agregar al carrito</button>

              </div>

              <div class="mt-3"   v-else>
                                <button type="button" disabled="true" class="btn btn-secondary p-3 mt-3">Esta agregado al carrito</button>

              </div>
                </div>
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
                id: '',
                producto: null,
                nuevaCantidad: 1
            }
        },
           computed:{
               ...mapGetters(['carrito'])
    },
        methods: {
            async getById(id){

        this.loading = true

             const snapshot = await firebase.firestore().collection('articulos').get()
            let docs = []
             snapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

        if(snapshot){
          this.loading = false
        }
        
        this.producto = docs.find(val => val.id === id)
     console.log(this.producto)
      },
          encontrado(id,carrito){
          let encontrado = carrito.find(val => val.id === id)
          if(encontrado){
            return true
          }else{
            return false
          }
      }
      ,
        agregar(obj){
      

                let newObj = {
                    cantidad: this.nuevaCantidad,
                    id: obj.id,
                    imagen: obj.imagen,
                    nombre: obj.nombre,
                    precio: obj.precio
                }

                console.log('eeeee',newObj)

             this.$store.dispatch("setProducto", newObj)

      },
        },
      
          mounted(){
              let {id} = this.$route.params
       //  console.log(id)
           this.id = id
        this.getById(this.id)

    }
    }
</script>

<style lang="css" scoped>
   .imagen {
    width: 50%;
    height: 200px;
    background-size: cover;
      background-position: center; /* Center the image */
  background-repeat: no-repeat;
    }
</style>