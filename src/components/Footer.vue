<template>
  <footer  class="footer-custom flex-shrink-0 py-4 bg-dark text-white-50">
    <div class="container text-center">
      <small>Copyright &copy; Tienda fake {{year}} </small>
    </div>
  </footer>
</template>

<script>
    export default {

        data(){
            return {
                year: ''
            }
        },
         mounted(){
             
             this.year = new Date().getFullYear()
        },
        
    }
</script>

<style lang="css" scoped>

.footer-custom {
   left:0px;
   bottom:0px;
   height:30px;
   width:100%;
   margin-top: 100px;
   background:#999;
 
}

</style>

