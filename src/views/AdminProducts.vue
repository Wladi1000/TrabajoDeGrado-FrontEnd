<script setup>
import { ref, reactive, onMounted } from "vue";
import { collection, getDocs, doc, getDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../main.js";

let productos = ref([]);
let nuevoProducto = reactive({
  id: null,
  nombre: null,
  precio: null,
  stock: null,
});

const clonarObjeto = (obj) => {

  let atributos = Object.keys( obj );

  atributos.forEach((e) =>{
    nuevoProducto[e] = obj[e];
  });
  return;
}

const generarCodigo = () =>{
  let existe = true;
  let codigo = Math.floor(Math.random() * 999999999);
  while (existe){
    existe = false;
    codigo = Math.floor(Math.random() * 999999999);
    productos.value.forEach(e =>{
      if( e.id == `componente-${codigo}` ){
        existe = true;
      };
    });
  };

  return codigo;
}

const limpiarNuevoProducto = () =>{
  let keys = Object.keys(nuevoProducto);
  keys.forEach(e =>{
    nuevoProducto[e] = null;
  });
  return;
};

//Fb Get
const getProductosFB = async () => {
  const querySnapshot = await getDocs(collection(db, "productos"));
  productos.value = [];
  querySnapshot.forEach((doc) => {
    let producto = doc.data();
    producto.id = doc.id;
    // this.usuarios.push(usuario);
    productos.value.push(producto);
  });
  return;
};
//FB GetID
const obtenerProductoNombre = async (producto) => {
  const docRef = doc( db, 'productos', producto.id ) ;
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    clonarObjeto( Object.assign({ id: docSnap.id }, docSnap.data()));
  } else {
    console.log("¡No existe el documento!");
  };

  return;
};
// Fb Create
const insertarProductoFB = async () =>{

  let codigoGenerado ="componente-" + generarCodigo();
  const productosNube = collection(db, 'productos');
  console.log(nuevoProducto.id);
  console.log( `Codigo: ${nuevoProducto.id != null? nuevoProducto.id : codigoGenerado}`);
  await setDoc(doc(productosNube, nuevoProducto.id? nuevoProducto.id : codigoGenerado),{
    nombre: nuevoProducto.nombre,
    precio: nuevoProducto.precio,
    stock: nuevoProducto.stock
  });

  limpiarNuevoProducto();
  await getProductosFB();
  return;
};
// FB DELETE
const eliminarProductoFB = async (producto) =>{
  await deleteDoc( doc( db, 'productos', producto.id ) );
  await getProductosFB();
  return;
};

// Local
const añadirProducto = () => {
  productos.value.push({
    nombre: nuevoProducto.nombre,
    precio: nuevoProducto.precio,
    cantidad: nuevoProducto.cantidad,
  });
  console.log(productos.value);
  return;
};

// Local
const eliminarProducto = (p) => {
  productos.value = productos.value.filter((e) => {
    return e.nombre != p.nombre;
  });
  console.log(productos.value);
  return;
};

onMounted(async () => {
  await getProductosFB();
});
</script>
<template>
  <div class="container h-100">
    <div class="intro h-100">
      <div class="row h-100 justifu-content-center align-items-center">
        <div class="col-md-6">
          <h3>Pagina Over View</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui quo
            veniam architecto, minima harum est? Ex est voluptatum aliquam
            temporibus eveniet a odio odit quos voluptate provident, nulla
            expedita nam.
          </p>
        </div>
        <div class="col-md-6">
          <img src="/img/svg/products.svg" alt="products" class="img-fl" />
        </div>
      </div>
    </div>
    <hr />
    <div class="product-test">
      <h3 class="d-inline-block m-2">Products list</h3>
      <button @click="limpiarNuevoProducto()" class="btn btn-primary float-right">
        +
      </button>
      <input
        class="form-control m-1"
        type="text"
        placeholder="ID producto"
        v-model="nuevoProducto.id"
        disabled
      />
      <input
        class="form-control m-1"
        type="text"
        placeholder="Nombre Producto"
        v-model="nuevoProducto.nombre"
      />
      <input
        class="form-control m-1"
        type="number"
        placeholder="Precio Producto"
        v-model="nuevoProducto.precio"
      />
      <input
        class="form-control m-1"
        type="number"
        placeholder="Cantidad Producto Stock"
        v-model="nuevoProducto.stock"
      />
      <button style="display: none;"  @click="añadirProducto()" class="btn btn-primary float-right">
        Añadir Producto
      </button>
      <button v-show="nuevoProducto.id == null" @click="insertarProductoFB()" class="btn btn-primary float-right">
        Añadir Producto
      </button>
      <button v-show="nuevoProducto.id != null" @click="insertarProductoFB()" class="btn btn-primary float-right">
        Actualizar Producto
      </button>
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Mount</th>
              <th>Modify</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="producto in productos" :key="producto.nombre">
              <td>
                {{ producto.id }}
              </td>
              <td>
                {{ producto.nombre }}
              </td>
              <td>
                {{ producto.precio }}
              </td>
              <td>
                {{ producto.stock }}
              </td>

              <td>
                <button
                  class="btn btn-primary"
                  @click="obtenerProductoNombre({ id: producto.id ,nombre: producto.nombre, precio: producto.precio, stock: producto.stock })"
                >
                  Edit
                </button>
                <button
                  class="btn btn-danger"
                  @click="eliminarProductoFB({ id: producto.id, nombre: producto.nombre, precio: producto.precio, stock: producto.stock })"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>