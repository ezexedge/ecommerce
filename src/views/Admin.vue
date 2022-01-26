<template>
    <div class="container mt-5">
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
         <label for="exampleFormControlFile1">Example file input</label>

                        <input type="file"  v-if="imagenUrl === '' && loading === false" @change="previewImage"

                         class="form-control-file" id="exampleFormControlFile1">
  <div v-if="loading === true" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
                         <p v-if="imagenUrl !== ''" class="text-success">Imagen cargada</p>

  
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
         

     <label for="exampleFormControlFile1">Example file input</label>

                        <input type="file"  v-if="imagenModificada === '' && loading === false" @change="previewImageModificado"

                         class="form-control-file" id="exampleFormControlFile1">
  <div v-if="loading === true" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
                         <p v-if="imagenModificada !== ''" class="text-success">Imagen cargada</p>

  

                    </div>

                    
                    <!-- errors -->
                 
                </form>
              </div>

              <div class="modal-footer">
                              <button  type="button" @click="modificarProducto"  :disabled="loading === true ? true : false" class="btn btn-primary">Modificar producto</button>

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
      <th>Imagen</th>
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
        <td class="w-25"><img :src="item.imagen" class="img-fluid img-thumbnail" alt="Sheep"></td>
               <td><a href="#" @click="openModalModificar(item.id)" class="btn btn-info">editar</a></td>
               <td><a href="#" @click="eliminarProducto(item.id)" class="btn btn-danger">eliminar</a></td>

  </tr>
  </tbody>
</table>

    </div>
</template>

<script>
import * as firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore'
    import $ from 'jquery'
    export default {

        data(){
            return{
                productos : [],
                nombre: '',
                precio: '',
                cantidad:'',
                idModificar: '',
                imagenData: '',
                imagen: '',
                imagenUrl: '',
                imagenModificada:'',
                loading: false
            }
        },
        methods:{

           async llamada(){

              const snapshot = await firebase.firestore().collection('articulos').get()
            let docs = []
             snapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });
               
               console.log(docs)
               this.productos = docs
           
            },
            previewImage(event) {
            this.imagenData = event.target.files[0];  
          this.loading = true

                          const storageRef = firebase.storage().ref();

            const docRef = storageRef.child(`imagenes/${this.imagenData.name}`);
        docRef.put(this.imagenData).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
          
        },
        (err) => {
          console.log(err);
        },
        async () => {

          this.imagenUrl = await docRef.getDownloadURL();
          if(this.imagenUrl !== ''){
            this.loading = false
          }
    
}


      );

},
            previewImageModificado(event) {
            this.imagenData = event.target.files[0];  
          this.loading = true

                          const storageRef = firebase.storage().ref();

            const docRef = storageRef.child(`imagenes/${this.imagenData.name}`);
        docRef.put(this.imagenData).on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
          
        },
        (err) => {
          console.log(err);
        },
        async () => {

          this.imagenModificada = await docRef.getDownloadURL();
          if(this.imagenModificada !== ''){
            this.loading = false
          }
    
}


      );

},


             getProducto(id){
            //    const result = await productoById(id)
                   
          let result = this.productos.find(val => val.id === id)

                console.log('id',result)
                if(!result.error){
                    this.nombre = result.nombre
                    this.cantidad = result.cantidad
                    this.precio = result.precio
                    this.imagen = result.imagen
                }

            },
            async eliminarProducto(id){
              
                console.log('eliminar',id)
                   const productoQuery = await firebase.firestore().collection('articulos').doc(id).delete()
                    console.log(productoQuery)

                    this.llamada()
                
            },
            openModal(){
                 $('#channelModal').appendTo("body").modal('show');
            },
            openBtn(){
  $('.dropdown').click(function(){
  $('#dropdownMenu1').toggleClass('show');
});
   
            },

                openModalModificar(id){
               
                    this.getProducto(id)
                    this.idModificar = id
                 $('#channelModal2').appendTo("body").modal('show');
            },
       async   agregarProducto(){

      

    
        
             
             let obj = {
                    nombre: this.nombre,
                    cantidad: this.cantidad,
                    precio: this.precio,
                    imagen: this.imagenUrl
                }


                    await firebase.firestore().collection('articulos').add(obj)


                    this.imagenUrl = ''
                    this.nombre = ''
                    this.precio = ''
                    this.cantidad = ''
                    $("#channelModal").modal('hide')
                this.llamada()


            },
           async modificarProducto(){

                let obj = {
                    nombre: this.nombre,
                    precio: this.precio,
                    cantidad: this.cantidad,
                    imagen: this.imagenModificada
                } 

              //db.collection("users").doc(doc.id).update({foo: "bar"});
              await firebase.firestore().collection('articulos').doc(this.idModificar).update({nombre: this.nombre,precio: this.precio,imagen: this.imagenModificada === '' ? this.imagen : this.imagenModificada ,cantidad: this.cantidad})
                console.log('producto a modificar',obj)


                $("#channelModal2").modal('hide')
                this.llamada()
                this.nombre = ''
                this.precio = ''
                this.cantidad = ''
                this.idModificar = ''
                this.imagenModificada = ''
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