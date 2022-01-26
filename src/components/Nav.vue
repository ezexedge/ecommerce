<template>
<nav class="navbar navbar-expand-sm navbar-dark bg-dark  ">
<div class="container d-flex justify-content-between">
    <a class="navbar-brand" href="#"  @click="irInicio">Tienda fake</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-
    target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-
    expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">


         <a class="nav-item nav-link" href="#"  v-if="currentUser !== null && currentUser.email === 'admin@gmail.com'" :class="admin === true ? 'seleccionado' : null" @click="irAdmin"><i class="fa fa-user" aria-hidden="true"></i></a>

         <a class="nav-item nav-link" href="#"  v-if="currentUser !== null && currentUser.email !== 'admin@gmail.com'" :class="user === true ? 'seleccionado' : null" @click="irCliente"><i class="fa fa-user" aria-hidden="true"></i></a>
           
             <a class="nav-item nav-link" href="#"  :class="carrito === true ? 'seleccionado' : null"  @click="irCarrito" ><i class="fa fa-shopping-cart" aria-hidden="true"></i></a>
    <a class="nav-item nav-link" :class="login === true ? 'seleccionado' : null"  href="#"  v-if="currentUser === null" @click="irLogin" ><i class="fa fa-sign-in mr-2" aria-hidden="true"></i><span>Login</span></a>
         
            <a class="nav-item nav-link" href="#" v-if="currentUser"  @click="logout"><i class="fa fa-sign-out mr-2" aria-hidden="true"></i><span>Logout</span></a>
     
   

        
        </div>
    </div>
    </div>
</nav>

</template>

<script>
import {mapGetters} from 'vuex'

    export default {
        data(){
            return {
                    login: false,
                    admin: false,
                    user: false,
                    carrito: false,
                    home: false
            }
          
        },
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
                              irAdmin(){
               this.$router.push('/admin')
            },
             logout(){
             
                 this.$store.dispatch('logoutUser')
                 this.$store.dispatch('setVaciar')

               this.$router.push('/login')

             },
             modificarNav(valor){
                 console.log('dd',valor)



                 if(valor === '/'){
                     this.login = false
                     this.carrito = false
                     this.admin = false
                     this.user = false
                 }

                 if(valor === '/cliente'){
                     this.login = false
                     this.carrito = false
                     this.admin = false 
                     this.user = true
                 }

            if(valor === '/admin'){
                this.login = false
                this.carrito = false
                this.admin = true
                this.user = false
            }

                   if(valor === '/login'){
                this.login = true
                this.carrito = false
                this.admin = false
                this.user = false
            }

            if(valor === '/carrito'){
                this.carrito = true
                this.login = false
                this.admin = false
                this.user = false
            }

             }
        },

        computed:{
               ...mapGetters(['currentUser'])
        },
        mounted(){
            console.log('mondadoooo',this.$router.currentRoute.path)
            this.modificarNav(this.$router.currentRoute.path)


        },
        watch : {
           $route (val){
           console.log(val)
           this.modificarNav(val.path)

           
        }
        }
    }
</script>

<style lang="css" scoped>
a i {
  font-size: 20px;  
}

.seleccionado {
color: white!important;
}
 .icono {
 width: 8%;
 color: white;
 cursor: pointer;
 }

 .opciones{
     display: flex!important;
 }
 .menu-item{
     width: 10px!important;
 }
</style>




