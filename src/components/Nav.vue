<template>
    <div>
<nav class="navbar navbar-dark bg-dark justify-content-between">
<div class="container">
  <a href="#" class="navbar-brand text-light " @click="irInicio" >Tienda fake</a>

      


       <div v-if="currentUser === null" class="col-3" @click="irLogin">
       
        <v-icon name="log-in"  class="icono"></v-icon>
       </div>



             <div v-else class="col-3" @click="irCliente">
       
        <v-icon name="user"  class="icono"></v-icon>
       </div>

           <div v-if="currentUser" class="col-3" @click="logout">
       
        <v-icon name="log-out"  class="icono"></v-icon>
       </div>

       
       <div class="col-3" @click="irCarrito">

                <v-icon name="shopping-cart"  class="icono"></v-icon>
       </div>


</div>
</nav>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        methods:{
            irInicio(){
               this.$router.push('/')
            },
                  irCarrito(){
               this.$router.push('/carrito')
            },
                      irLogin(){
               this.$router.push('/login')
            },
                            irCliente(){
               this.$router.push('/cliente')
            },
             logout(){
             
                 this.$store.dispatch('logoutUser')
                 this.$store.dispatch('setVaciar')

               this.$router.push('/login')

             }
        },
        computed:{
               ...mapGetters(['currentUser'])
        }
    }
</script>

<style lang="css" scoped>
 .icono {
 width: 15%;
 color: white;
 cursor: pointer;
 }
</style>