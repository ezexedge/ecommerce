<template>
  <div id="app">

<Nav/>
  <div class="container">

  <div class="col-12 d-flex justify-content-between mt-5">
  <div class="col-5">
    <Login title="Login" />

  </div>
 <hr width="1" size="auto">
  <div class="col-5">
  <register title="Register" />

  </div>
  </div>

  </div>


  </div>
</template>

<script>
  import Nav from '../src/components/Nav.vue'
  import Login from '../src/components/Login'
  import Register from '../src/components/Register'


export default {
  name: 'App',
  components: {
    Nav,
    Login,
    Register 
     }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
