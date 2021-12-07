<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="(producto, index) in productos" :key="index">
                <td>{{paquete.id}}</td>
                <td>{{paquete.precio}} $</td>
                   <td>{{paquete.cantidad}}</td>
            </tr>
  </tbody>
</table>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                productos: [
                         {
            id: 1,
            precio: 50,
            cantidad: 3,
            imagen: "https://images.almundo.com/205/image/fetch/fl_progressive,q_auto/https://almundo-com-res.cloudinary.com/image/upload/v1626705465/UPLOADS_Productos/ARGENTINA.jpg",
        },
                              {
            id: 2,
            precio: 100,
            cantidad: 12,
            imagen: "https://images.almundo.com/205/image/fetch/fl_progressive,q_auto/https://almundo-com-res.cloudinary.com/image/upload/v1626705465/UPLOADS_Productos/ARGENTINA.jpg",
        },
                              {
            id: 3,
            precio: 500,
            cantidad: 4,
            imagen: "https://images.almundo.com/205/image/fetch/fl_progressive,q_auto/https://almundo-com-res.cloudinary.com/image/upload/v1626705465/UPLOADS_Productos/ARGENTINA.jpg",
        },
                              {
            id: 4,
            precio: 1000,
            cantidad: 20,
            imagen: "https://images.almundo.com/205/image/fetch/fl_progressive,q_auto/https://almundo-com-res.cloudinary.com/image/upload/v1626705465/UPLOADS_Productos/ARGENTINA.jpg",
        },
       
      ]
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>