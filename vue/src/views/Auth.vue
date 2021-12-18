<template>
    <div class="container">

  <div class="col-12 d-flex justify-content-between mt-5">
  <div class="col-5">
    <LoginForm title="Login" />

  </div>
 <hr width="1" size="auto">
  <div class="col-5">
  <RegisterForm title="Register" />

  </div>
  </div>

<div class="col-3">
  <hr/>

  <p>admin : admin@gmail.com </p>
  <p>password : 123456 </p>
  <hr/>
  <p>cliente : cliente@gmail.com </p>
  <p>password : 123456 </p>
</div>
  </div>



</template>

<script>

import LoginForm from '../components/LoginForm.vue'
import RegisterForm from '../components/RegisterForm.vue'

    export default {
        components: {
    LoginForm,
    RegisterForm
     }
        
    }
</script>

<style lang="scss" scoped>

</style>