<template>
    <div>
    <h3 class="font-weight-bolder">{{title}}</h3>
    <form @submit.prevent="submit">
  <div class="form-group mb-3">
    <input type="text" class=" form-control" v-model="$v.nombre.$model"
     :class="{'is-invalid': $v.nombre.$error}"
     id="formGroupExampleInput" placeholder="Nombre">

  </div>

    <div class="form-group mb-3">
    <input type="text" class=" form-control" v-model="$v.apellido.$model" 
     :class="{'is-invalid': $v.apellido.$error}"
     id="formGroupExampleInput" placeholder="Apellido">

  </div>


 <div class="form-group mb-3">
    <input type="text" class="form-control" v-model="$v.email.$model" 
    :class="{'is-invalid': $v.email.$error}"
    id="formGroupExampleInput" placeholder="Email">
    <p class="text-danger mt-2" v-if="!$v.email.email" >El email ingresado incorrecto</p>
  </div>

  


  <div class="form-group">
    <input type="password" class="form-control" v-model="$v.password.$model"
    
     :class="{'is-invalid': $v.password.$error}"
     id="formGroupExampleInput2" placeholder="Password">
         <p class="text-danger mt-2" v-if="!$v.password.minLength" >Debe ingresar el password minimo 6</p>

  </div>

 
      <button  class=" mt-3 btn btn-primary" @click="submit" :disabled="$v.$invalid" type="submit">Registrarse</button>
  
 

</form>


    </div>
</template>

<script>
import {required,email,minLength} from 'vuelidate/lib/validators'

    export default {

        props : {
            title: String
        },
        data(){
            return{
                nombre: '',
                apellido: '',
                email: '',
                password: '',
                errorSubmit: false
            }
        },
             validations:{
            nombre: {required},
            apellido: {required},
            email: {required,email},
            password: {required,
             minLength: minLength(6) 
            }
        },
        methods:{
           submit(){
                this.errorSubmit =  false
                    this.$v.$touch()

                    if(this.$v.$invalid){
                        console.log('se genero un error')

                        this.errorSubmit = true


                    }else{

                        console.log('procesnado datos')
                    }

            }
        } 

        
    }
</script>

<style lang="scss" scoped>

</style>