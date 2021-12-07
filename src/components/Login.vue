<template>
    <div>
    <h3 class="font-weight-bolder">{{title}}</h3>
    <form>
  <div class="form-group mb-3">
    <input type="text" class="form-control" v-model="email" id="formGroupExampleInput" placeholder="Email">
  </div>
  <div class="form-group">
    <input type="text" class="form-control" v-model="password" id="formGroupExampleInput2" placeholder="Password">
  </div>
 
      <button  class=" mt-3 btn btn-primary">Iniciar sesion</button>


</form>



    </div>
</template>

<script>
    export default {
        props:{
            title: String
        },
        data(){
            return {
                email: '',
                password: ''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>