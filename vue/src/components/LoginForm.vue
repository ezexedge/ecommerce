<template>
    <div>
    <h3 class="font-weight-bolder">{{title}}</h3>
    <form @submit.prevent="submit">
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


    </div>
</template>

<script>
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
            submit(){
                this.errorSubmit =  false
                    this.$v.$touch()



 
                    if(this.$v.$invalid){
                        console.log('se genero un error')
                        this.errorSubmit = true
                    }else{

                        if(this.email === 'admin@gmail.com' && this.password === '123456'){
                            
                           this.$router.push('/admin')

                        }
                          else if(this.email === 'cliente@gmail.com' && this.password === '123456'){
                            
                           this.$router.push('/cliente')

                        }else{
     this.$toasted.show('Error el usuario no existe',{
        duration:800,
        type:'error'
      })
                        }

                   

                    }
            }
        },
        mounted(){
   
        }
    }
</script>

<style lang="scss" scoped>
</style>