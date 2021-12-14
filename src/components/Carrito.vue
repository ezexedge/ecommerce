<template>
    <div>
<table class="table">
  <thead>
    <tr>
      <th>id</th>
            <th>nombre</th>
      <th>precio</th>
        <th>cantidad</th>
      <th>imagen</th>

    </tr>
  </thead>
  <tbody>
   <tr v-for="(item, index) in productos" :key="index">
    <td>{{ item.id }}</td>
    <td>{{item.nombre}}</td>
      <td>{{ item.precio }}</td>
        <td>{{ item.cantidad }}</td>
    <td><img :src="item.imagen" class="rounded ml-5" style="width: 15%" /></td>
                <td><a href="#" @click="clickViaje(index)" class="btn btn-success">Ver Paquetes</a></td>

  </tr>
  </tbody>
</table>
<div class="col-5">


<div v-if="this.valor === 1" class="card">
  <img class="card-img-top" :src="this.productos[this.seleccionado].imagen" alt="Card image cap">
  <div class="card-body">
    <h4 class="card-title">{{this.productos[this.seleccionado].nombre}}</h4>
    <p class="card-text">
 precio :  {{this.productos[this.seleccionado].precio}}
 cantidad : {{this.productos[this.seleccionado].cantidad}}
    </p>
    <a href="#!" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    </div>
</template>

<script>
    export default {
   
        props:{
            seleccionado: Number
        },
        data(){
            return{
                productos: [
                         {
            id: 0,
            precio: 50,
            nombre: 'viaje argentina',
            cantidad: 3,
            imagen: "https://images.almundo.com/205/image/fetch/fl_progressive,q_auto/https://almundo-com-res.cloudinary.com/image/upload/v1626705465/UPLOADS_Productos/ARGENTINA.jpg",
        },
                              {
            id: 1,
            nombre: 'viaje a china',
            precio: 100,
            cantidad: 12,
            imagen: "https://cuandoviajo.com/img/featured/china.jpg",
        },
                              {
            id: 2,
            nombre: 'viaje caribe',
            precio: 500,
            cantidad: 4,
            imagen: "https://viajes.nationalgeographic.com.es/medio/2018/03/14/playa-bonita-republica-dominicana_01c0e228_1280x720.jpg",
        },
                              {
            id: 3,
            precio: 1000,
            nombre: 'viaje a europa',
            cantidad: 20,
            imagen: "https://planesturisticos.com/c/u/2020/09/paris-1200x667.webp",
        },
       
      ],
        valor: 0   

            }
        },
        methods : {
            clickViaje: function(param){
                this.valor = 1
                this.seleccionado = Number(param)
console.log('aca el valor',param)

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>