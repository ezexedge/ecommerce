<template>
    <div>
    <h3 class="font-weight-bolder">{{title}}</h3>
    <form @submit.prevent="submit" class="mb-5">
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


 
      <button  class=" mt-3 btn btn-primary" @click="submit" :disabled="$v.$invalid" type="submit">Iniciar sesion</button>


</form>

        <a href="#" class="font-weight-bold " @click="redirectRegister">Registrarse</a>
   
    <div class="d-flex flex-column mt-5">
     <p class="mb-5">Ingresar como admin:</p>

     <p>admin@gmail.com</p>
    <p>123456</p>
    </div>

    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import {required,email,minLength} from 'vuelidate/lib/validators'
    export default {
        
        props:{
            title: String
        },
        data(){
            return {
                email: '',
                password: '',
                errorSubmit: false
            }
        },
        validations:{
        
            email: {required,email},
            password: {required,
             minLength: minLength(6) 
            }
        },
        methods:{
           async submit(){
                this.errorSubmit =  false
                    this.$v.$touch()



 
                    if(this.$v.$invalid){
                        console.log('se genero un error')
                        this.errorSubmit = true
                    }else{


     try{

       
       const result =  await firebase.auth().signInWithEmailAndPassword(this.email, this.password)

          if(result){

           
              this.$store.dispatch('setUser', result.user)
            
            if(this.email === 'admin@gmail.com'){
              this.$router.push('/admin')

              }else{
                 this.$router.push('/cliente')

              }
          }
console.log('result',result)
        }catch(err){

           this.error = err.message
             this.$toasted.show(err.message,{
        duration:800,
        type:'error'
      })
        }

   
                        

                   

                    }
            },
             redirectRegister(){
                this.$router.push('/registrar')
         }
        },
        mounted(){
   
        }
    }
</script>

<style lang="scss" scoped>
</style>