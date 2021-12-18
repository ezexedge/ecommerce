<template>
    <div class="container">
            <!-- Modal -->
        <div class="modal fade" id="channelModal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title text-dark">Agregar producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input  type="text" v-model="nombre"  placeholder="nombre" class="form-control">
                        <input  type="text" v-model="precio" placeholder="precio" class="form-control mt-4 mb-4">
                        <input  type="text" v-model="cantidad"  placeholder="cantidad" class="form-control">

                    </div>
                    <!-- errors -->
                 
                </form>
              </div>

              <div class="modal-footer">
                              <button  type="button" @click="agregarProducto" class="btn btn-primary">Agregar producto</button>

                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>

                <div class="modal fade" id="channelModal2">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

              <div class="modal-header">
                <h5 class="modal-title text-dark">Modificar producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div class="modal-body">
                <form>
                    <div class="form-group">
                        <input  type="text" v-model="nombre"  placeholder="nombre" class="form-control">
                        <input  type="text" v-model="precio" placeholder="precio" class="form-control mt-4 mb-4">
                        <input  type="text" v-model="cantidad"  placeholder="cantidad" class="form-control">

                    </div>
                    <!-- errors -->
                 
                </form>
              </div>

              <div class="modal-footer">
                              <button  type="button" @click="modificarProducto" class="btn btn-primary">Modificar producto</button>

                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
<h3 class="mt-3">Admin</h3>
<div class="col-12 d-flex justify-content-center">
<button type="button" @click="openModal" class="btn btn-success btn-lg btn-block col-3 mt-3">Agregar producto</button>

</div>

<table class="table mt-5">
  <thead>
    <tr>
  
      <th>id</th>
      <th>Nombre</th>
      <th>Precio</th>
      <th>Cantidad</th>
      <th>Editar</th>
      <th>Eliminar</th>

    </tr>
  </thead>
  <tbody>
   <tr v-for="(item, index) in productos" :key="index">
    <td>{{ item.id }}</td>
    <td>{{item.nombre}}</td>
      <td>{{ item.precio }}</td>
        <td>{{ item.cantidad }}</td>
               <td><a href="#" @click="openModalModificar(item.id)" class="btn btn-info">editar</a></td>
               <td><a href="#" @click="eliminarProducto(item.id)" class="btn btn-danger">eliminar</a></td>

  </tr>
  </tbody>
</table>
    </div>
</template>

<script>
    import $ from 'jquery'
    import {productos,eliminar,agregar,productoById,modificar} from '../api'
    export default {

        data(){
            return{
                productos : [],
                nombre: '',
                precio: '',
                cantidad:'',
                idModificar: ''
            }
        },
        methods:{

           async llamada(){
               
               const result = await productos()
               this.productos = result
           
            },
            async getProducto(id){
                const result = await productoById(id)
                console.log('id',result)
                if(!result.error){
                    this.nombre = result.nombre
                    this.cantidad = result.cantidad
                    this.precio = result.precio
                }

            },
            async eliminarProducto(id){
                await eliminar(id)
                this.llamada()
                
            },
            openModal(){
                 $('#channelModal').appendTo("body").modal('show');
            },
                openModalModificar(id){
               
                    this.getProducto(id)
                    this.idModificar = id
                 $('#channelModal2').appendTo("body").modal('show');
            },
           async agregarProducto(){
                let obj = {
                    nombre: this.nombre,
                    cantidad: this.cantidad,
                    precio: this.precio
                }

                console.log(obj)

                    await agregar(obj)
                    this.nombre = ''
                    this.precio = ''
                    this.cantidad = ''
                    $("#channelModal").modal('hide')
                this.llamada()


            },
         async   modificarProducto(){

                let obj = {
                    nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad
                } 

                await modificar(obj,this.idModificar)
                $("#channelModal2").modal('hide')
                this.llamada()
                this.nombre = ''
                this.precio = ''
                this.cantidad = ''
                this.idModificar = ''
            }  


        },
        mounted(){
            this.llamada()
        },
        watch:{
        
        }

    }
</script>

<style lang="scss" scoped>

</style>