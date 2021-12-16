<template>
    <div>
<nav class="navbar navbar-dark bg-dark justify-content-between">
<div class="container">
  <a class="navbar-brand text-light " @click="irInicio" >Tienda fake</a>
       <div class="col-3 d-flex justify-content-end" @click="irCarrito">
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
            }
        }
    }
</script>

<style lang="css" scoped>
 .icono {
 width: 12%;
 color: white;
 cursor: pointer;
 }
</style>