<template>
    <div>
<nav class="navbar navbar-dark bg-dark justify-content-between">
<div class="container">
  <a href="#" class="navbar-brand text-light " @click="irInicio" >Tienda fake</a>

      


       <div class="col-3" @click="irLogin">
       
        <v-icon name="user"  class="icono"></v-icon>
       </div>
       
       <div class="col-3" @click="irCarrito">

                <v-icon name="shopping-cart"  class="icono"></v-icon>
       </div>


</div>
</nav>
    </div>
</template>

<script>
    export default {
        methods:{
            irInicio(){
               this.$router.push('/')
            },
                  irCarrito(){
               this.$router.push('/cliente')
            },
                      irLogin(){
               this.$router.push('/login')
            }
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