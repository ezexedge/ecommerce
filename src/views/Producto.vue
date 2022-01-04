<template>
    <div class="container mt-3">
        <div class="col-12 d-flex flex-column justify-content-center">
        <h1 class="text-center">{{producto.nombre}}</h1>
        <img class="img-thumbnail" :src="producto.imagen" alt="Thumbnail image">
</div>

       
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'
    export default {
        data(){
            return{
                id: '',
                producto: null
            }
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
        },
      
          mounted(){
              let {id} = this.$route.params
       //  console.log(id)
           this.id = id
        this.getById(this.id)

    }
    }
</script>

<style lang="scss" scoped>

</style>